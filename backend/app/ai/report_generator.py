from __future__ import annotations

from typing import Any

from app.ai.facial_measurements import compute_measurements
from app.ai.scoring import calculate_overall_score, calculate_scores


def classify_face_shape(measurements: dict[str, float]) -> tuple[str, float]:
    face_width = measurements.get("face_width", 0.0)
    face_height = measurements.get("face_height", 0.0)
    jaw_width = measurements.get("jaw_width", 0.0)

    if face_width and face_height:
        ratio = face_width / face_height
    else:
        ratio = 0.0

    if 1.1 <= ratio <= 1.3:
        shape = "Oval"
    elif 0.95 <= ratio <= 1.05:
        shape = "Round"
    elif jaw_width > face_width * 0.9:
        shape = "Square"
    elif ratio > 1.3:
        shape = "Rectangle"
    elif face_width > face_height * 1.2:
        shape = "Diamond"
    elif face_width < face_height * 0.9:
        shape = "Heart"
    else:
        shape = "Triangle"

    return shape, 0.91


def build_report(landmarks: list[Any]) -> dict[str, Any]:
    measurements = compute_measurements(landmarks)
    scores = calculate_scores(measurements)
    overall_score = calculate_overall_score(scores)
    face_shape, confidence = classify_face_shape(measurements)

    strengths = [
        "Balanced facial proportions",
        "Good symmetry signals",
        "Strong overall harmony",
    ]
    improvements = [
        "Refine jawline definition",
        "Balance lip proportions",
        "Improve eye symmetry",
    ]

    return {
        "overall_score": round(overall_score, 2),
        "face_shape": face_shape,
        "confidence": round(confidence, 2),
        "scores": scores,
        "measurements": measurements,
        "strengths": strengths,
        "improvements": improvements,
    }
