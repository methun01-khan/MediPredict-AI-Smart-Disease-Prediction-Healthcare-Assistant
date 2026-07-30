import React, { useMemo, useState } from 'react';
import { predictDisease } from '../services/api';

const symptomOptions = ['fever', 'cough', 'headache', 'fatigue', 'pain', 'nausea', 'vomiting', 'shortness of breath', 'rash', 'diarrhea', 'dizziness', 'swelling', 'wheezing'];

export default function Prediction() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) => (prev.includes(symptom) ? prev.filter((item) => item !== symptom) : [...prev, symptom]));
  };

  const handlePredict = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await predictDisease({ symptoms: selectedSymptoms, text: textInput, user_id: 'demo' });
      setResult(response.data);
    } catch (err) {
      setError('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const severityColor = useMemo(() => {
    if (!result) return '#38bdf8';
    if (result.severity === 'High') return '#ef4444';
    if (result.severity === 'Medium') return '#f59e0b';
    return '#22c55e';
  }, [result]);

  return (
    <div className="container" style={{ display: 'grid', gap: '1rem' }}>
      <section className="card" style={{ padding: '1.25rem', display: 'grid', gap: '1rem' }}>
        <h2 style={{ margin: 0 }}>Prediction Studio</h2>
        <p style={{ color: '#94a3b8', margin: 0 }}>Select symptoms or describe how you feel to generate a prediction.</p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {symptomOptions.map((symptom) => (
            <button key={symptom} onClick={() => toggleSymptom(symptom)} style={{ border: 'none', borderRadius: '999px', padding: '0.55rem 0.8rem', background: selectedSymptoms.includes(symptom) ? '#2563eb' : '#0f172a', color: '#fff', cursor: 'pointer' }}>
              {symptom}
            </button>
          ))}
        </div>
        <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Describe symptoms in natural language..." style={{ minHeight: '120px', padding: '0.9rem', borderRadius: '12px', border: '1px solid #334155', background: '#020617', color: '#fff' }} />
        <button onClick={handlePredict} style={{ padding: '0.8rem 1rem', border: 'none', borderRadius: '12px', background: 'linear-gradient(90deg, #2563eb, #38bdf8)', color: '#fff', cursor: 'pointer', fontWeight: 700 }}>
          {loading ? 'Predicting...' : 'Run Prediction'}
        </button>
        {error ? <div style={{ color: '#f87171' }}>{error}</div> : null}
      </section>

      {loading ? <div className="card" style={{ padding: '1rem' }}>Loading prediction results...</div> : null}

      {result ? (
        <section style={{ display: 'grid', gap: '1rem' }}>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: severityColor, fontWeight: 700 }}>Severity: {result.severity}</div>
              <div style={{ fontSize: '1.1rem', marginTop: '0.35rem' }}>Top prediction: {result.top_predictions[0].disease}</div>
            </div>
            <div style={{ color: '#38bdf8', fontWeight: 700 }}>Confidence: {result.top_predictions[0].confidence}%</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {result.top_predictions.map((item) => (
              <div key={item.disease} className="card" style={{ padding: '1rem' }}>
                <h3 style={{ marginTop: 0 }}>{item.disease}</h3>
                <div style={{ color: '#38bdf8', fontWeight: 700 }}>{item.confidence}%</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>Recommendations</h3>
            <ul>
              {result.recommendations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
}
