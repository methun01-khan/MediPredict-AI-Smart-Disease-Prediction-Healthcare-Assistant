import os
import json
from pathlib import Path

import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, classification_report
from sklearn.model_selection import train_test_split
from joblib import dump

from app.core.config import DATASET_PATH, MODEL_DIR


def build_dataset(path: str) -> tuple[pd.DataFrame, list[str]]:
    if not os.path.exists(path):
        raise FileNotFoundError(f"Dataset not found at {path}")
    df = pd.read_csv(path)
    if "disease" not in df.columns:
        raise ValueError("Dataset must contain a 'disease' column")
    symptoms = [col for col in df.columns if col != "disease"]
    df["symptoms_text"] = df[symptoms].astype(str).agg(lambda row: " ".join(row), axis=1)
    X = df["symptoms_text"]
    y = df["disease"]
    return df, symptoms


def train_models() -> dict:
    df, symptoms = build_dataset(DATASET_PATH)
    X = df["symptoms_text"]
    y = df["disease"]

    vectorizer = CountVectorizer()
    X_vec = vectorizer.fit_transform(X)
    X_train, X_test, y_train, y_test = train_test_split(X_vec, y, test_size=0.2, random_state=42)

    models = {}
    for name, model in [
        ("logistic_regression", LogisticRegression(max_iter=500)),
        ("random_forest", RandomForestClassifier(n_estimators=100, random_state=42)),
    ]:
        model.fit(X_train, y_train)
        preds = model.predict(X_test)
        models[name] = {
            "model": model,
            "accuracy": round(float(accuracy_score(y_test, preds)), 4),
            "precision": round(float(precision_score(y_test, preds, average="weighted", zero_division=0)), 4),
            "report": classification_report(y_test, preds, output_dict=True),
        }

    Path(MODEL_DIR).mkdir(parents=True, exist_ok=True)
    dump(vectorizer, os.path.join(MODEL_DIR, "vectorizer.joblib"))
    dump(models["logistic_regression"]["model"], os.path.join(MODEL_DIR, "logistic_regression.joblib"))
    dump(models["random_forest"]["model"], os.path.join(MODEL_DIR, "random_forest.joblib"))

    metadata = {
        "symptoms": symptoms,
        "models": {
            name: {
                "accuracy": info["accuracy"],
                "precision": info["precision"],
            }
            for name, info in models.items()
        },
    }
    with open(os.path.join(MODEL_DIR, "metadata.json"), "w", encoding="utf-8") as fh:
        json.dump(metadata, fh, indent=2)

    return metadata


if __name__ == "__main__":
    print(train_models())
