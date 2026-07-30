import re
from typing import List

SYMPTOM_KEYWORDS = {
    "fever": "fever",
    "cough": "cough",
    "headache": "headache",
    "fatigue": "fatigue",
    "pain": "pain",
    "nausea": "nausea",
    "vomiting": "vomiting",
    "shortness": "shortness of breath",
    "breath": "shortness of breath",
    "sore": "sore throat",
    "throat": "sore throat",
    "rash": "rash",
    "diarrhea": "diarrhea",
    "dizziness": "dizziness",
    "swelling": "swelling",
    "wheezing": "wheezing",
}


def extract_symptoms(text: str) -> List[str]:
    normalized = re.sub(r"[^a-zA-Z\s]", " ", text.lower())
    tokens = normalized.split()
    extracted = []
    for token in tokens:
        if token in SYMPTOM_KEYWORDS:
            value = SYMPTOM_KEYWORDS[token]
            if value not in extracted:
                extracted.append(value)
    return extracted
