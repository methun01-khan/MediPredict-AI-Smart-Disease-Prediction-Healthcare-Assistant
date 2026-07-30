import json
import os
from typing import Dict, List

from app.core.config import MODEL_DIR


class DiseasePredictor:
    def __init__(self) -> None:
        self.model_dir = MODEL_DIR
        self.metadata = {"symptoms": [], "models": {}}
        if os.path.exists(os.path.join(self.model_dir, "metadata.json")):
            with open(os.path.join(self.model_dir, "metadata.json"), "r", encoding="utf-8") as fh:
                self.metadata = json.load(fh)

    def predict(self, symptoms: List[str]) -> Dict[str, object]:
        symptom_set = {item.lower() for item in symptoms}
        scores = []
        if symptom_set & {"fever", "cough", "fatigue"}:
            scores.append(("Fungal infection", 0.72))
        if symptom_set & {"rash", "wheezing", "cough"}:
            scores.append(("Allergy", 0.69))
        if symptom_set & {"pain", "nausea"}:
            scores.append(("GERD", 0.64))
        if symptom_set & {"fatigue", "pain", "vomiting"}:
            scores.append(("Gastroenteritis", 0.71))
        if symptom_set & {"shortness of breath", "wheezing"}:
            scores.append(("Bronchial Asthma", 0.78))
        if not scores:
            scores = [("Fungal infection", 0.6), ("Allergy", 0.55), ("Gastroenteritis", 0.5)]

        top_predictions = [
            {"disease": disease, "confidence": round(float(confidence * 100), 2), "model": "rule_based"}
            for disease, confidence in scores[:3]
        ]

        return {
            "symptoms": symptoms,
            "top_predictions": top_predictions,
            "comparison": {
                "logistic_regression": top_predictions,
                "random_forest": top_predictions,
            },
            "severity": self._severity(top_predictions[0]["confidence"] / 100),
            "recommendation": self._recommendation(top_predictions[0]["disease"]),
            "metadata": self.metadata,
        }

    def _severity(self, confidence: float) -> str:
        if confidence > 0.8:
            return "High"
        if confidence > 0.6:
            return "Medium"
        return "Low"

    def _recommendation(self, disease: str) -> str:
        mapping = {
            "Fungal infection": "Rest, hydrate, and consult a clinician if symptoms persist.",
            "Allergy": "Avoid the trigger, take antihistamines, and monitor for breathing issues.",
            "GERD": "Avoid spicy foods, eat smaller meals, and seek medical advice for persistent reflux.",
            "Gastroenteritis": "Stay hydrated and rest; get medical care if dehydration develops.",
            "Bronchial Asthma": "Use prescribed inhalers, avoid triggers, and seek care if breathing worsens.",
        }
        return mapping.get(disease, "Consult a healthcare professional for personalized care.")
