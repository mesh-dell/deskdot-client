import axios from "axios";

const API_URL = "https://api.deskdot.cfd/api/auth";

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const logout = async (userData) => {
  const response = await axios.post(`${API_URL}/logout`, userData);
  return response.data;
};

const refreshToken = async (userData) => {
  const response = await axios.post(`${API_URL}/refresh-token`, userData);
  return response.data;
};

export { login, logout, signup, refreshToken };
