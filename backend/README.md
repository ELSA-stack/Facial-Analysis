# Facial Analysis AI Backend

This backend provides a FastAPI service for facial analysis and scoring.

## Installation

```bash
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
.venv\\Scripts\\activate  # Windows
pip install -r requirements.txt
```

## Run the server

```bash
uvicorn app.main:app --reload
```

The app will be available at http://localhost:8000.

## API documentation

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Sample request

```bash
curl -X POST "http://localhost:8000/analyze" \
  -F "front_image=@front.png;type=image/png" \
  -F "left_image=@left.png;type=image/png" \
  -F "right_image=@right.png;type=image/png"
```

## Sample response

```json
{
  "overall_score": 84,
  "face_shape": "Oval",
  "confidence": 0.94,
  "scores": {
    "symmetry": 89,
    "proportions": 82,
    "jawline": 87,
    "eyes": 83,
    "nose": 80,
    "lips": 86
  },
  "measurements": {
    "face_width": 142.2,
    "face_height": 189.6,
    "jaw_width": 110.5,
    "eye_distance": 63.1
  },
  "strengths": ["Balanced facial proportions"],
  "improvements": ["Refine jawline definition"]
}
```
