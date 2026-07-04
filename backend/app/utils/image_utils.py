from __future__ import annotations

from typing import BinaryIO

from fastapi import UploadFile

from app.config.settings import MAX_IMAGE_SIZE_BYTES, SUPPORTED_EXTENSIONS, SUPPORTED_IMAGE_TYPES


def _get_extension(filename: str | None) -> str:
    if not filename:
        return ""
    return "." + filename.rsplit(".", 1)[-1].lower()


async def read_upload_bytes(file: UploadFile) -> bytes:
    await file.seek(0)
    data = await file.read()
    await file.seek(0)
    return data


async def validate_upload(file: UploadFile) -> bytes:
    if not file.filename:
        raise ValueError("Missing filename")

    extension = _get_extension(file.filename)
    content_type = (file.content_type or "").lower()

    if extension not in SUPPORTED_EXTENSIONS and content_type not in SUPPORTED_IMAGE_TYPES:
        raise ValueError("Invalid image format")

    if content_type and content_type not in SUPPORTED_IMAGE_TYPES:
        raise ValueError("Invalid image format")

    data = await read_upload_bytes(file)
    if len(data) == 0:
        raise ValueError("Empty image uploaded")
    if len(data) > MAX_IMAGE_SIZE_BYTES:
        raise ValueError("Image exceeds 10MB limit")

    header = data[:32].lower()
    is_png = header.startswith(b"\x89png")
    is_jpeg = header.startswith(b"\xff\xd8")
    is_webp = header.startswith(b"riff") and b"webp" in header

    if not (is_png or is_jpeg or is_webp):
        raise ValueError("Invalid image content")

    return data
