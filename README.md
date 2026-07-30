## 📌 Overview
<img width="1266" height="821" alt="Screenshot 2026-07-30 122653" src="https://github.com/user-attachments/assets/8679797b-133b-4852-b06b-991ccc6646b7" />
<img width="1231" height="753" alt="Screenshot 2026-07-30 122727" src="https://github.com/user-attachments/assets/17f2e0ee-03f7-495d-816a-d160802a6c68" />
<img width="1237" height="890" alt="Screenshot 2026-07-30 122833" src="https://github.com/user-attachments/assets/fcc09b15-c9bb-428e-baeb-9a5cee242783" />

<img width="924" height="823" alt="Screenshot 2026-07-30 122903" src="https://github.com/user-attachments/assets/f180e3ea-2027-412e-bff2-6a8e1c918dc3" />
<img width="1264" height="917" alt="Screenshot 2026-07-30 122933" src="https://github.com/user-attachments/assets/373770ea-3505-4c71-bc16-5b2665f71065" />



**MediPredict AI** is a full‑stack AI‑powered healthcare web application that predicts diseases based on user‑reported symptoms, provides intelligent recommendations, and enables interactive health consultation through NLP and chatbot integration.

This system combines **Machine Learning**, **Natural Language Processing**, and modern web technologies to deliver a real‑world healthcare assistant experience.

> ⚠️ **Disclaimer**: This system is for **educational purposes only** and does **NOT** replace professional medical advice. Always consult a qualified healthcare provider for medical concerns.

---

## 🚀 Features

### 🧠 Core Features
- Symptom‑based disease prediction using multiple ML models
- Returns **top‑3 predicted diseases** with confidence scores
- Supports **Logistic Regression** and **Random Forest** with model comparison

### 🤖 AI & Smart Features
- **NLP‑based symptom extraction** from free‑text input (spaCy / NLTK)
- **AI chatbot** for basic medical consultation and guidance
- **Smart recommendation system** – suggests precautions, treatments, and health tips based on predicted disease

### 📊 Visualization & Insights
- **Confidence score visualization** using Chart.js
- **Model performance comparison** dashboard (accuracy & precision)
- **Prediction history tracking** for each user

### ⚠️ Health Intelligence
- **Severity detection** (Low / Medium / High) with color‑coded indicators
- **Emergency alert suggestions** for critical conditions
- **Personalized health tips** and lifestyle advice

### 🌍 User Experience
- **Multi‑language support** (English + Bangla)
- **Voice input** (speech‑to‑text) for symptom description
- **Clean, responsive UI** built with React and Tailwind CSS
- **Dark mode toggle** 🌙 for comfortable viewing
- **Toast notifications** for alerts and feedback
- **Loading animations and skeleton UI** for better UX

### 🔐 System Features
- **User authentication** (Login / Signup) with JWT
- **Secure REST APIs** built with FastAPI
- **Cloud database** (MongoDB) to store user profiles and prediction history

### ☁️ Deployment
- **Frontend** deployed on **Vercel**
- **Backend** deployed on **Render** / **Railway**
- Scalable, mobile‑first, and performance‑optimized

---

## 🏗️ Project Structure
<img width="1232" height="1277" alt="image" src="https://github.com/user-attachments/assets/098a167f-12be-4a06-86a2-26921c10a765" />

---

## ⚙️ Tech Stack

| Layer          | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Frontend**   | React, Tailwind CSS, Chart.js, Axios, React Router                           |
| **Backend**    | FastAPI (Python), Uvicorn                                                    |
| **ML / AI**    | Scikit‑learn, TensorFlow (optional), Pandas, NumPy                          |
| **NLP**        | spaCy, NLTK                                                                  |
| **Database**   | MongoDB (or Firebase)                                                        |
| **Auth**       | JWT, bcrypt                                                                  |
| **Deployment** | Vercel (frontend), Render / Railway (backend)                                |

---

## 🧪 Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-disease-prediction.git
cd ai-disease-prediction
🔹 2. Backend Setup
bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
Download the spaCy English model:

bash
python -m spacy download en_core_web_sm
Create a .env file (see Environment Variables).

Run the FastAPI server:

bash
uvicorn app.main:app --reload
The API will be available at http://localhost:8000. Interactive docs at http://localhost:8000/docs.

🔹 3. Frontend Setup
bash
cd frontend
npm install
Create a .env file (see below).

Start the development server:

bash
npm start
The app will run on http://localhost:3000.

🔐 Environment Variables
Create .env files in both backend/ and frontend/ directories.

Backend .env
ini
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_jwt
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
ALLOWED_ORIGINS=http://localhost:3000,https://your-frontend-domain.com
Frontend .env
ini
REACT_APP_API_URL=http://localhost:8000   # or your deployed backend URL
REACT_APP_GOOGLE_CLIENT_ID=...            # optional
📊 Dataset
The model is trained on a Disease‑Symptom dataset (data/disease_symptoms.csv) containing mappings from diseases to their common symptoms. The dataset is sourced from Kaggle and other open healthcare repositories. It is preprocessed into a binary feature matrix for training.

🔗 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/signup	User registration
POST	/api/auth/login	User login (returns JWT)
POST	/api/predict	Submit symptoms and get predictions
POST	/api/chat	Send message to chatbot
GET	/api/history	Get user’s prediction history
GET	/api/recommendations	Get health tips for a disease
Full API documentation is available at /docs when the server is running.

🎯 Future Improvements
Integration of deep learning models (e.g., neural networks) for improved accuracy.

Real‑time doctor consultation via video/chat.

Wearable health data integration (heart rate, sleep, etc.).

Mobile app built with React Native.

Enhanced NLP with custom symptom‑recognition models.

AI‑generated health reports for users.

👨‍💻 Author
Md Methun Hossain
GitHub · LinkedIn · Portfolio

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit pull requests.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

⭐ Support
If you like this project, please give it a ⭐ on GitHub!
It helps others discover the project and motivates us to keep improving it.



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
