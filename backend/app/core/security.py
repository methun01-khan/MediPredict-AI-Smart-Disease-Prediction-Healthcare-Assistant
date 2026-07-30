import hashlib
from typing import Optional


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


def verify_password(password: str, password_hash: str) -> bool:
    return hash_password(password) == password_hash


def create_session_token(email: str) -> str:
    return hashlib.sha256(email.encode("utf-8")).hexdigest()[:24]
