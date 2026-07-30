import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000',
});

export const loginUser = (payload) => api.post('/auth/login', payload);
export const signupUser = (payload) => api.post('/auth/signup', payload);
export const predictDisease = (payload) => api.post('/predict/', payload);
export const chatWithBot = (payload) => api.post('/chat/', payload);
export const getRecommendations = (payload) => api.post('/recommendations/', payload);
export const getHistory = (userId) => api.get(`/history/${userId}`);
export default api;
