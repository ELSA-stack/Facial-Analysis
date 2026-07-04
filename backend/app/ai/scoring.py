from __future__ import annotations

from app.config.settings import SCORE_WEIGHTS


def calculate_scores(measurements: dict[str, float]) -> dict[str, float]:
    """Create a score dictionary from numerical measurements and symmetry values."""
    symmetry = (measurements.get("face_symmetry", 0.0) + measurements.get("eye_symmetry", 0.0) + measurements.get("nose_symmetry", 0.0) + measurements.get("lip_symmetry", 0.0)) / 4.0
    proportions = 100.0 - min(100.0, abs(measurements.get("golden_ratio", 1.0) - 1.618) * 30.0)
    jawline = 80.0 + min(20.0, max(0.0, measurements.get("jaw_width", 0.0) / 10.0 - 10.0))
    eyes = 80.0 + min(20.0, max(0.0, measurements.get("eye_distance", 0.0) / 5.0 - 10.0))
    nose = 80.0 + min(20.0, max(0.0, measurements.get("nose_width", 0.0) / 8.0 - 5.0))
    lips = 80.0 + min(20.0, max(0.0, measurements.get("lip_width", 0.0) / 6.0 - 8.0))

    scores = {
        "symmetry": round(max(0.0, min(100.0, symmetry)), 2),
        "proportions": round(max(0.0, min(100.0, proportions)), 2),
        "jawline": round(max(0.0, min(100.0, jawline)), 2),
        "eyes": round(max(0.0, min(100.0, eyes)), 2),
        "nose": round(max(0.0, min(100.0, nose)), 2),
        "lips": round(max(0.0, min(100.0, lips)), 2),
    }
    return scores


def calculate_overall_score(scores: dict[str, float]) -> float:
    weighted_total = 0.0
    for key, value in scores.items():
        weight = SCORE_WEIGHTS.as_dict().get(key, 0.0)
        weighted_total += value * weight
    return round(weighted_total, 2)
