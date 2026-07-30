from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv()

BASE_DIR = Path(__file__).resolve().parents[1]
BACKEND_DIR = BASE_DIR.parent
DATASET_PATH = os.getenv("DATASET_PATH", str(BACKEND_DIR / "data" / "disease_symptoms.csv"))
MODEL_DIR = os.getenv("MODEL_DIR", str(BASE_DIR / "models" / "saved_models"))

APP_NAME = os.getenv("APP_NAME", "AI Disease Prediction System")
DEBUG = os.getenv("DEBUG", "false").lower() == "true"
