import axios from "axios";

const API_URL = "https://api.deskdot.cfd/api/products";

const getProducts = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

const getProduct = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

const createProduct = async (product, user) => {
  const response = await axios.post(`${API_URL}/`, product, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  });
  return response.data;
};

const editProduct = async (productId, product, user) => {
  const response = await axios.put(`${API_URL}/${productId}`, product, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  });
  return response.data;
};

const deleteProduct = async (productId, user) => {
  const response = await axios.delete(`${API_URL}/${productId}`, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  });
  return response.data;
};

export { getProduct, getProducts, createProduct, editProduct, deleteProduct };
