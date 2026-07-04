from dataclasses import dataclass

MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024
SUPPORTED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp"}
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
CORS_ORIGINS = ["http://localhost:5173"]


@dataclass(frozen=True)
class ScoreWeights:
    symmetry: float = 0.25
    proportions: float = 0.20
    jawline: float = 0.15
    eyes: float = 0.15
    nose: float = 0.10
    lips: float = 0.15

    def as_dict(self) -> dict[str, float]:
        return {
            "symmetry": self.symmetry,
            "proportions": self.proportions,
            "jawline": self.jawline,
            "eyes": self.eyes,
            "nose": self.nose,
            "lips": self.lips,
        }


SCORE_WEIGHTS = ScoreWeights()
