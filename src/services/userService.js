import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/users";

const user = {
  message: "Logged in succesfully",
  user: {
    id: 1,
    first_name: "John",
    email: "john@example.com",
    role: "buyer",
  },
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJyb2xlIjoiYnV5ZXIifSwiaWF0IjoxNzI4NTY0MjEyLCJleHAiOjE3Mjg1Njc4MTJ9.MZaRLJlkHQec97NdY9vtN_ifTZdtNY96CzLSSATgcSg",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNzI4NTY0MjEyLCJleHAiOjE3MjkxNjkwMTJ9.FZAyvocD6gqr9MJC3CBDXEe55VAn_GmCqhRkMncvG24",
};

const getProfile = async (user) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

const updateProfile = async (user, data) => {
  const response = await axios.put(`${API_URL}/profile`, data, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};
