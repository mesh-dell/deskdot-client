import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/orders";

const getOrders = async (user) => {
  const response = await axios.get(`${API_URL}/`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

const getOrder = async (user, orderId) => {
  const response = await axios.get(`${API_URL}/${orderId}/`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

const updateStatus = async (user, order_item_id, status) => {
  const response = await axios.put(
    `${API_URL}/${order_item_id}/status`,
    status,
    {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    },
  );
  return response.data;
};

const cancel = async (user, orderId) => {
  const response = await axios.delete(`${API_URL}/${orderId}/cancel`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

const create = async (user) => {
  const response = await axios.post(`${API_URL}/`, null, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

export { create, updateStatus, getOrder, getOrders, cancel };
