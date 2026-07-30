from fastapi import APIRouter
from pydantic import BaseModel

from app.utils.recommendations import build_recommendations

router = APIRouter()


class RecommendationRequest(BaseModel):
    disease: str


@router.post("/")
def recommendations(payload: RecommendationRequest):
    return {"recommendations": build_recommendations(payload.disease)}
