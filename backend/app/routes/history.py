from fastapi import APIRouter

from app.core.database import get_history_for_user

router = APIRouter()


@router.get("/{user_id}")
def history(user_id: str):
    return {"history": get_history_for_user(user_id)}
