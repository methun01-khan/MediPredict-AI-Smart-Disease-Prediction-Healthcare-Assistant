📌 Overview  
**MediPredict AI** is a full-stack AI-powered healthcare web application that predicts diseases based on user symptoms, provides intelligent recommendations, and enables interactive health consultation using Machine Learning and NLP.
<img width="1266" height="821" alt="Screenshot 2026-07-30 122653" src="https://github.com/user-attachments/assets/44e18a4a-1b7e-4324-aa5f-88272607c9ed" />
<img width="1231" height="753" alt="Screenshot 2026-07-30 122727" src="https://github.com/user-attachments/assets/90a9236d-ab08-4571-b5fa-d84660b5e0de" />
<img width="1237" height="890" alt="Screenshot 2026-07-30 122833" src="https://github.com/user-attachments/assets/84fe05ae-3a7c-4215-b156-1164c6d39d06" />
<img width="924" height="823" alt="Screenshot 2026-07-30 122903" src="https://github.com/user-attachments/assets/7da8b081-74bc-4af0-a5f2-c5dd4ae7b340" />
<img width="1264" height="917" alt="Screenshot 2026-07-30 122933" src="https://github.com/user-attachments/assets/6a35477d-3f90-40a1-9744-6494a11afbd2" />



## 🚀 Features

### 🧠 Core Features
- Symptom-based disease prediction using ML models  
- Top-3 disease predictions with confidence scores  
- Multiple model support (Logistic Regression, Random Forest)  

### 🤖 AI & Smart Features
- NLP-based symptom extraction (spaCy / NLTK)  
- AI chatbot for basic consultation  
- Smart recommendation system  

### 📊 Visualization & Insights
- Confidence score charts (Chart.js)  
- Model comparison dashboard  
- Prediction history tracking  

### ⚠️ Health Intelligence
- Severity detection (Low / Medium / High)  
- Emergency alert suggestions  
- Personalized health tips  

### 🌍 User Experience
- Multi-language support (English + Bangla)  
- Voice input (speech-to-text)  
- Responsive UI (React) + Dark mode  

### 🔐 System Features
- User authentication (Login / Signup)  
- Secure FastAPI backend  
- Cloud database integration  

### ☁️ Deployment
- Frontend: Vercel  
- Backend: Render / Railway  
- Mobile responsive & scalable  

---

## 🏗️ Project Structure
<img width="1232" height="1277" alt="image" src="https://github.com/user-attachments/assets/07d1ffa8-30e2-485c-a093-52273682df72" />


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
