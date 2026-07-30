from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.database import load_users, save_users
from app.core.security import create_session_token, hash_password, verify_password

router = APIRouter()


class SignupRequest(BaseModel):
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/signup")
def signup(payload: SignupRequest):
    users = load_users()
    if any(user["email"] == payload.email for user in users):
        raise HTTPException(status_code=400, detail="User already exists")
    users.append({
        "email": payload.email,
        "password": hash_password(payload.password),
        "id": payload.email,
    })
    save_users(users)
    return {"message": "Signup successful", "token": create_session_token(payload.email)}


@router.post("/login")
def login(payload: LoginRequest):
    users = load_users()
    user = next((u for u in users if u["email"] == payload.email), None)
    if not user or not verify_password(payload.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "token": create_session_token(payload.email), "user": {"email": user["email"]}}
