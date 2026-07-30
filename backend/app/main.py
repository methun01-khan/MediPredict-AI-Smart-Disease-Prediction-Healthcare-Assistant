from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import APP_NAME
from app.routes import auth, predict, chat, recommendations, history

app = FastAPI(title=APP_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(predict.router, prefix="/predict", tags=["predict"])
app.include_router(chat.router, prefix="/chat", tags=["chat"])
app.include_router(recommendations.router, prefix="/recommendations", tags=["recommendations"])
app.include_router(history.router, prefix="/history", tags=["history"])


@app.get("/")
def root():
    return {"message": "AI Disease Prediction System API is running"}
