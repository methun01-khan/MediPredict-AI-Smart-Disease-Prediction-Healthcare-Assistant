import React, { useState } from 'react';
import { chatWithBot } from '../services/api';

export default function Chatbot() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hello! I can offer general wellness guidance.' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const response = await chatWithBot({ message: input });
      setMessages([...newMessages, { role: 'assistant', content: response.data.reply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ display: 'grid', gap: '1rem' }}>
      <section className="card" style={{ padding: '1rem', display: 'grid', gap: '0.8rem' }}>
        <h2 style={{ margin: 0 }}>Health Assistant</h2>
        <div style={{ display: 'grid', gap: '0.6rem' }}>
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} style={{ padding: '0.7rem 0.9rem', borderRadius: '12px', background: message.role === 'assistant' ? '#0f172a' : '#1d4ed8', color: '#fff' }}>
              {message.content}
            </div>
          ))}
          {loading ? <div style={{ color: '#94a3b8' }}>Thinking...</div> : null}
        </div>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about symptoms or wellness" style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #334155', background: '#020617', color: '#fff' }} />
          <button onClick={sendMessage} style={{ padding: '0.8rem 1rem', border: 'none', borderRadius: '12px', background: '#2563eb', color: '#fff', cursor: 'pointer' }}>Send</button>
        </div>
      </section>
    </div>
  );
}
