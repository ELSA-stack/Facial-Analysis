from pydantic import BaseModel


class AnalysisScores(BaseModel):
    symmetry: float
    proportions: float
    jawline: float
    eyes: float
    nose: float
    lips: float


class AnalysisResponse(BaseModel):
    overall_score: float
    face_shape: str
    confidence: float
    scores: AnalysisScores
    measurements: dict[str, float]
    strengths: list[str]
    improvements: list[str]
