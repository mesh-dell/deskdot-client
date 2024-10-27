import axios from "axios";

const API_URL = "https://api.deskdot.cfd/api/users";

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
