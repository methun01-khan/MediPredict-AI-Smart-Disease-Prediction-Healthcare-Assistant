import React from 'react';

const features = ['Symptom-based prediction', 'Top-3 disease insights', 'Severity guidance', 'Chatbot assistant', 'Multi-language ready'];

export default function Home() {
  return (
    <div className="container" style={{ display: 'grid', gap: '1rem' }}>
      <section className="card" style={{ padding: '1.5rem', display: 'grid', gap: '1rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(56, 189, 248, 0.16), rgba(52, 211, 153, 0.12))', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', position: 'relative' }}>
          <div>
            <div style={{ color: '#38bdf8', fontWeight: 700, marginBottom: '0.35rem' }}>Healthcare AI Platform</div>
            <h1 style={{ margin: 0, fontSize: '2rem', lineHeight: 1.2 }}>Smarter disease prediction with a beautiful healthcare experience.</h1>
          </div>
          <div className="card" style={{ padding: '1rem', minWidth: '220px', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.22), rgba(16, 185, 129, 0.18))' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Disclaimer</div>
            <div style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>This system is for educational purposes only.</div>
          </div>
        </div>
        <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.7, position: 'relative' }}>
          Enter symptoms, receive top disease predictions, compare model outputs, and get basic wellness recommendations in a modern dashboard.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', position: 'relative' }}>
          {features.map((item) => (
            <span key={item} style={{ background: 'linear-gradient(90deg, #0f172a, #1d4ed8)', padding: '0.5rem 0.8rem', borderRadius: '999px', color: '#e2e8f0', border: '1px solid rgba(56, 189, 248, 0.25)' }}>{item}</span>
          ))}
        </div>
      </section>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {['Prediction Engine', 'Chatbot', 'Dashboard Insights'].map((title) => (
          <div key={title} className="card" style={{ padding: '1rem', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.9))' }}>
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p style={{ color: '#94a3b8', marginBottom: 0 }}>A polished, mobile-friendly healthcare experience built with React and FastAPI.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
