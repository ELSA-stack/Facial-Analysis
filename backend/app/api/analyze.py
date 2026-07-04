from __future__ import annotations

import logging
from typing import Any

import cv2
import numpy as np
from fastapi import HTTPException, UploadFile

from app.ai.mediapipe_detector import FaceMeshDetector
from app.ai.report_generator import build_report
from app.utils.image_utils import validate_upload

logger = logging.getLogger(__name__)


def _load_image_from_bytes(data: bytes) -> np.ndarray:
    array = np.frombuffer(data, dtype=np.uint8)
    image = cv2.imdecode(array, cv2.IMREAD_COLOR)
    if image is None:
        raise ValueError("Invalid image content")
    return image


async def process_analysis_request(front_image: UploadFile, left_image: UploadFile, right_image: UploadFile) -> dict[str, Any]:
    files = [front_image, left_image, right_image]
    image_bytes = []
    for uploaded_file in files:
        try:
            image_data = await validate_upload(uploaded_file)
        except ValueError as exc:
            raise HTTPException(status_code=400, detail=f"Invalid image: {exc}") from exc
        image_bytes.append(image_data)

    detector = FaceMeshDetector()
    reports = []
    for data in image_bytes:
        image = _load_image_from_bytes(data)
        detection = detector.detect(image)
        report = build_report(detection["landmarks"])
        reports.append(report)

    combined = {
        "overall_score": round(sum(item["overall_score"] for item in reports) / len(reports), 2),
        "face_shape": reports[0]["face_shape"],
        "confidence": round(sum(item["confidence"] for item in reports) / len(reports), 2),
        "scores": {
            key: round(sum(item["scores"][key] for item in reports) / len(reports), 2)
            for key in reports[0]["scores"].keys()
        },
        "measurements": {
            key: round(sum(item["measurements"].get(key, 0.0) for item in reports) / len(reports), 2)
            for key in reports[0]["measurements"].keys()
        },
        "strengths": reports[0]["strengths"],
        "improvements": reports[0]["improvements"],
    }
    return combined
