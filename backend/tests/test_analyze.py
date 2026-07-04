from io import BytesIO

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_missing_files_returns_422():
    response = client.post("/analyze", files={})
    assert response.status_code == 422


def test_invalid_image_returns_400(monkeypatch):
    def fake_process_images(*args, **kwargs):
        return {
            "overall_score": 80,
            "face_shape": "Oval",
            "confidence": 0.9,
            "scores": {
                "symmetry": 80,
                "proportions": 82,
                "jawline": 84,
                "eyes": 81,
                "nose": 79,
                "lips": 83,
            },
            "measurements": {"face_width": 120.0, "face_height": 160.0},
            "strengths": ["Balanced proportions"],
            "improvements": ["Add more definition"],
        }

    monkeypatch.setattr("app.main.process_analysis_request", fake_process_images)

    image_bytes = b"not-an-image"
    files = {
        "front_image": ("front.jpg", image_bytes, "image/jpeg"),
        "left_image": ("left.jpg", image_bytes, "image/jpeg"),
        "right_image": ("right.jpg", image_bytes, "image/jpeg"),
    }

    response = client.post("/analyze", files=files)
    assert response.status_code == 400
    assert "Invalid image" in response.text


def test_valid_request_returns_analysis(monkeypatch):
    def fake_process_images(*args, **kwargs):
        return {
            "overall_score": 84,
            "face_shape": "Oval",
            "confidence": 0.94,
            "scores": {
                "symmetry": 89,
                "proportions": 82,
                "jawline": 87,
                "eyes": 83,
                "nose": 80,
                "lips": 86,
            },
            "measurements": {
                "face_width": 142.2,
                "face_height": 189.6,
                "jaw_width": 110.5,
                "eye_distance": 63.1,
            },
            "strengths": ["Balanced features"],
            "improvements": ["Refine jawline"],
        }

    monkeypatch.setattr("app.main.process_analysis_request", fake_process_images)

    image_bytes = BytesIO(b"\x89PNG\r\n\x1a\nfake-png-contents").getvalue()
    files = {
        "front_image": ("front.png", image_bytes, "image/png"),
        "left_image": ("left.png", image_bytes, "image/png"),
        "right_image": ("right.png", image_bytes, "image/png"),
    }

    response = client.post("/analyze", files=files)
    assert response.status_code == 200
    assert response.json()["face_shape"] == "Oval"
    assert response.json()["overall_score"] == 84
