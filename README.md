# MediPredict AI - Smart Disease Prediction Healthcare Assistant

MediPredict AI is a full-stack AI-powered healthcare web application that predicts diseases from user-reported symptoms, provides intelligent recommendations, and enables interactive health consultation through NLP and chatbot integration.

> Disclaimer: This system is for educational purposes only and does not replace professional medical advice.

## Features
- Symptom-based disease prediction with top-3 predicted diseases and confidence scores
- Comparison between rule-based, logistic regression, and random forest-style outputs
- NLP-inspired symptom extraction from text input
- AI chatbot for basic medical guidance
- Severity detection and personalized recommendations
- Modern responsive React dashboard with charts and history
- Login/signup flow for a simple multi-user experience

## Project Structure
- backend/: FastAPI service and API routes
- frontend/: React app with modern dashboard UI
- data/: Sample disease-symptom dataset

## Backend Setup
```bash
cd backend
py -3 -m pip install fastapi==0.115.0 uvicorn[standard]==0.30.6 python-dotenv==1.0.1
py -3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Frontend Setup
```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

## Tech Stack
- Frontend: React, React Router, Chart.js, Axios
- Backend: FastAPI, Uvicorn
- AI: symptom extraction, recommendation logic, chatbot responses
- Data: CSV-based symptom dataset

## Run Locally
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## Author
Md Methun Hossain

## Notes
- The backend was verified locally and responds on http://127.0.0.1:8000/ with the expected health payload.
- The frontend source is in place and the dependency install completed, but the build is currently blocked by a Node/webpack compatibility issue in this environment.

## Disclaimer
This system is for educational purposes only.
=======
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
>>>>>>> 1324290 (Initial commit)
