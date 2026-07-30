from fastapi import APIRouter
from pydantic import BaseModel

from app.nlp.chatbot import chatbot_reply

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/")
def chat(payload: ChatRequest):
    return {"reply": chatbot_reply(payload.message)}
