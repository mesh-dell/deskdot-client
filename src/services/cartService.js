import axios from "axios";

const user = {
  message: "Logged in succesfully",
  user: {
    id: 1,
    first_name: "John",
    email: "john@example.com",
    role: "buyer",
  },
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJyb2xlIjoiYnV5ZXIifSwiaWF0IjoxNzI4NTg3NjQ3LCJleHAiOjE3Mjg1OTEyNDd9.TI29M_NT02HweJjo2yIL0qXkyWHcKNPWvqG4I6dDf4E",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNzI4NTg3NjQ3LCJleHAiOjE3MjkxOTI0NDd9.qcUiA5-WeZOW_ll3TegNhiGA4PJvv_QqGo8vACCB758",
};

const API_URL = "http://127.0.0.1:5000/api/cart";

const getCart = async (user) => {
  const response = await axios.get(`${API_URL}/`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

const addToCart = async (user, item) => {
  const response = await axios.post(`${API_URL}/items`, item, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

const updateQuantity = async (user, quantity, cart_item_id) => {
  const response = await axios.put(
    `${API_URL}/items/${cart_item_id}`,
    quantity,
    {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    },
  );
  return response.data;
};

const remove = async (user, cart_item_id) => {
  const response = await axios.delete(`${API_URL}/items/${cart_item_id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

export { getCart, addToCart, updateQuantity, remove };
