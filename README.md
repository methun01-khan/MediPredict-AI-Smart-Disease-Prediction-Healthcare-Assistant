MediPredict AI is a full-stack AI-powered healthcare web application that predicts diseases based on user symptoms, provides intelligent recommendations, and enables interactive health consultation through NLP and chatbot integration.

This system combines Machine Learning, NLP, and modern web technologies to deliver a real-world healthcare assistant experience.

⚠️ Disclaimer: This system is for educational purposes only and does NOT replace professional medical advice.

🚀 Features
🧠 Core Features
Symptom-based disease prediction using ML models
Top-3 disease predictions with confidence scores
Multiple model support (Logistic Regression, Random Forest)
🤖 AI & Smart Features
NLP-based symptom extraction using spaCy / NLTK
AI chatbot for basic medical consultation
Smart recommendation system (precautions & advice)
📊 Visualization & Insights
Confidence score visualization using Chart.js
Model performance comparison dashboard
Prediction history tracking
⚠️ Health Intelligence
Severity detection (Low / Medium / High)
Emergency alert suggestions
Personalized health tips
🌍 User Experience
Multi-language support (English + Bangla)
Voice input (speech-to-text)
Clean, responsive UI built with React
Dark mode support 🌙
🔐 System Features
User authentication (Login / Signup)
Secure API with FastAPI backend
Cloud database integration (user history)
☁️ Deployment
Frontend deployed on Vercel
Backend deployed on Render / Railway
Scalable and mobile-responsive design
🏗️ Project Structure
ai-disease-prediction/
├── backend/
│   ├── app/
│   │   ├── main.py                 # FastAPI entry point
│   │   ├── models/                 # ML model loading & prediction
│   │   │   ├── train.py            # Model training script
│   │   │   ├── predict.py
│   │   │   └── saved_models/
│   │   ├── routes/                 # API endpoints
│   │   │   ├── auth.py
│   │   │   ├── predict.py
│   │   │   ├── chat.py
│   │   │   ├── recommendations.py
│   │   │   └── history.py
│   │   ├── core/                   # config, DB, security
│   │   │   ├── config.py
│   │   │   ├── database.py
│   │   │   └── security.py
│   │   ├── nlp/                    # symptom extraction, chatbot logic
│   │   │   ├── extractor.py
│   │   │   └── chatbot.py
│   │   └── utils/                  # helpers
│   │       ├── severity.py
│   │       └── recommendations.py
│   ├── requirements.txt
│   ├── .env
│   └── Dockerfile (optional)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── Charts.jsx
│   │   │   │   └── HistoryTable.jsx
│   │   │   ├── Prediction/
│   │   │   │   ├── SymptomSelector.jsx
│   │   │   │   ├── NLPInput.jsx
│   │   │   │   └── ResultCards.jsx
│   │   │   ├── Chatbot/
│   │   │   │   └── ChatInterface.jsx
│   │   │   └── common/
│   │   │       ├── LoadingSkeleton.jsx
│   │   │       └── ToastNotification.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Prediction.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   └── LoginSignup.jsx
│   │   ├── context/                # Auth & Theme contexts
│   │   ├── hooks/                  # Custom hooks (useAuth, useDarkMode)
│   │   ├── services/               # API calls (axios)
│   │   ├── styles/                 # Tailwind, global CSS
│   │   ├── utils/                  # i18n, speech recognition
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
├── data/
│   └── disease_symptoms.csv        # Training dataset
├── README.md
└── .gitignore
⚙️ Tech Stack
🔹 Frontend
React
Tailwind CSS
Chart.js
🔹 Backend
FastAPI
Python
🔹 AI / ML
Scikit-learn
TensorFlow
🔹 NLP
spaCy
NLTK
🔹 Database
MongoDB / Firebase
🧪 Installation & Setup
🔹 1. Clone Repository
git clone https://github.com/your-username/ai-disease-prediction.git
cd ai-disease-prediction
🔹 2. Backend Setup
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
🔹 3. Frontend Setup
cd frontend
npm install
npm start
🔹 4. Environment Variables

Create .env files in both frontend & backend:

DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
API_URL=http://localhost:8000
📊 Dataset
Disease-Symptom dataset (data/disease_symptoms.csv)
Source: Kaggle / Open healthcare datasets
🔗 API Endpoints (Sample)
Endpoint	Method	Description
/predict	POST	Predict disease
/chat	POST	Chatbot interaction
/auth	POST	User authentication
/history	GET	User history
🎯 Future Improvements
Deep learning model integration
Real-time doctor consultation
Wearable health data integration
Mobile app (React Native)
👨‍💻 Author

Your Name
Md Methun Hossain
Software Engineer 

🌟 Contribution

Contributions are welcome! Feel free to fork this repo and submit pull requests.

⭐ Support

If you like this project, give it a ⭐ on GitHub!
