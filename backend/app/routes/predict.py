from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

from app.models.predict import DiseasePredictor
from app.nlp.extractor import extract_symptoms
from app.core.database import append_history
from app.utils.recommendations import build_recommendations
from app.utils.severity import get_severity

router = APIRouter()
predictor = DiseasePredictor()


class PredictRequest(BaseModel):
    symptoms: List[str]
    text: str = ""
    user_id: str = "guest"


@router.post("/")
def predict(payload: PredictRequest):
    symptoms = payload.symptoms or extract_symptoms(payload.text)
    if not symptoms:
        raise HTTPException(status_code=400, detail="Please provide at least one symptom")

    result = predictor.predict(symptoms)
    result["severity"] = get_severity(max(item["confidence"] / 100 for item in result["comparison"]["logistic_regression"]))
    result["recommendations"] = build_recommendations(result["top_predictions"][0]["disease"])
    append_history({
        "user_id": payload.user_id,
        "symptoms": symptoms,
        "prediction": result["top_predictions"][0]["disease"],
        "confidence": result["top_predictions"][0]["confidence"],
        "severity": result["severity"],
    })
    return result
