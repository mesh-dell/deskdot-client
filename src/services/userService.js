import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/users";

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

export { getProfile, updateProfile };
