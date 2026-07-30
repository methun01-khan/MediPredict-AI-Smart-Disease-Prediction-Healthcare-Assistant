def get_severity(confidence: float) -> str:
    if confidence >= 0.8:
        return "High"
    if confidence >= 0.6:
        return "Medium"
    return "Low"
