def build_recommendations(disease: str) -> list[str]:
    mapping = {
        "Fungal infection": ["Rest and hydrate", "Avoid sharing personal items", "See a clinician if it persists"],
        "Allergy": ["Avoid triggers", "Use antihistamines if advised", "Seek care for breathing trouble"],
        "Diabetes": ["Monitor blood sugar", "Follow a balanced diet", "Consult a doctor for management"],
        "Bronchial Asthma": ["Use inhaler as prescribed", "Avoid smoke and allergens", "Seek urgent care for severe symptoms"],
        "Gastroenteritis": ["Drink fluids", "Avoid heavy meals", "Seek help if dehydration occurs"],
    }
    return mapping.get(disease, ["Follow general wellness practices", "Consult a healthcare professional"])
