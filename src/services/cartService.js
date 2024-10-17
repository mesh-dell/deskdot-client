import axios from "axios";

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

const clearCart = async (user) => {
  const response = await axios.delete(`${API_URL}/`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

export { getCart, addToCart, updateQuantity, remove, clearCart };
