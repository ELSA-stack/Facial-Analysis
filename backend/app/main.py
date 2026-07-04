import inspect

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from app.api.analyze import process_analysis_request
from app.config.settings import CORS_ORIGINS
from app.models.response_models import AnalysisResponse
from app.utils.image_utils import validate_upload

app = FastAPI(title="Facial Analysis AI", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze", response_model=AnalysisResponse)
async def analyze_endpoint(
    front_image: UploadFile = File(...),
    left_image: UploadFile = File(...),
    right_image: UploadFile = File(...),
):
    try:
        for uploaded_file in (front_image, left_image, right_image):
            await validate_upload(uploaded_file)

        result = process_analysis_request(front_image, left_image, right_image)
        if inspect.isawaitable(result):
            result = await result
        return result
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=f"Invalid image: {exc}") from exc
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover - defensive guard
        raise HTTPException(status_code=500, detail=str(exc)) from exc
