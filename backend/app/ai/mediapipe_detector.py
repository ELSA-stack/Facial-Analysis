from __future__ import annotations

import logging
from typing import Any

import cv2
import numpy as np

try:
    import mediapipe as mp
except ImportError:  # pragma: no cover - fallback for environments without dependency
    mp = None

logger = logging.getLogger(__name__)


class FaceMeshDetector:
    """Thin wrapper around MediaPipe Face Mesh for a single-face detection workflow."""

    def __init__(self) -> None:
        if mp is None:
            raise RuntimeError("mediapipe is not installed")
        self.face_mesh = mp.solutions.face_mesh.FaceMesh(
            max_num_faces=1,
            refine_landmarks=True,
            min_detection_confidence=0.5,
            min_tracking_confidence=0.5,
        )
        self.draw = mp.solutions.drawing_utils

    def detect(self, image: np.ndarray) -> dict[str, Any]:
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = self.face_mesh.process(rgb_image)
        if not results.multi_face_landmarks:
            raise ValueError("No face detected")
        if len(results.multi_face_landmarks) > 1:
            raise ValueError("Multiple faces detected")

        landmarks = results.multi_face_landmarks[0].landmark
        return {"landmarks": landmarks, "image_shape": image.shape}
