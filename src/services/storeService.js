import axios from "axios";

const API_URL = "https://api.deskdot.cfd/api/stores";

const getStores = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

const getStore = async (store_id) => {
  const response = await axios.get(`${API_URL}/${store_id}`);
  return response.data;
};

const getStoreProducts = async (store_id) => {
  const response = await axios.get(`${API_URL}/${store_id}/products`);
  return response.data;
};

const getSellerOrders = async (user) => {
  const response = await axios.get(`${API_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return response.data;
};

export { getStore, getStores, getStoreProducts, getSellerOrders };
