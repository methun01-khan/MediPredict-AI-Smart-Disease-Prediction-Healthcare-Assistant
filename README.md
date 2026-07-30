# AI Disease Prediction System

A full-stack AI-powered healthcare web application that predicts diseases from selected symptoms and provides severity, recommendations, and conversational guidance.

## Features
- Machine learning-based disease prediction with Logistic Regression and Random Forest
- NLP-style symptom extraction from free text
- Top-3 predicted diseases with confidence scores
- Detailed severity and recommendation suggestions
- Chatbot for basic medical consultation
- Responsive React dashboard with charts and history
- User authentication with login/signup

## Project Structure
- backend/: FastAPI service, ML training and prediction logic
- frontend/: React app with modern dashboard UI
- data/: Sample training dataset

## Backend Setup
1. Install Python dependencies:
   ```bash
   cd backend
   py -3 -m pip install fastapi==0.115.0 uvicorn[standard]==0.30.6 python-dotenv==1.0.1
   ```
2. Start the API:
   ```bash
   py -3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

## Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   ```
2. Start the app:
   ```bash
   npm start
   ```

## Notes
- The backend was verified locally and responds on http://127.0.0.1:8000/ with the expected health payload.
- The frontend source is in place and the dependency install completed, but the build is currently blocked by a Node/webpack compatibility issue in this environment.

## Disclaimer
This system is for educational purposes only.
