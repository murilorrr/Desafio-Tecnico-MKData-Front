import api from '../api';

async function getAllCustomers() {
  const response = await api
    .get('/customers')
    .then((response) => response.data)
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default getAllCustomers;