from typing import List


def chatbot_reply(message: str) -> str:
    lowered = message.lower()
    if any(word in lowered for word in ["fever", "cold", "flu"]):
        return "It sounds like you may have a viral infection. Rest, stay hydrated, and seek care if symptoms worsen."
    if any(word in lowered for word in ["pain", "headache"]):
        return "Try rest, hydration, and monitor the pain. If it is severe or sudden, contact a clinician promptly."
    if any(word in lowered for word in ["breath", "wheezing", "asthma"]):
        return "Breathing symptoms should be taken seriously. Use your prescribed inhaler if you have one and seek urgent care if symptoms escalate."
    return "I can help with general wellness questions, but this is not a substitute for professional medical advice."
