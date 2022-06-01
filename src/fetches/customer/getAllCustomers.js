import api from '../api';

async function getAllCustomers() {
  const getRequest = await api
    .get('/customers')
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return getRequest;
}

export default getAllCustomers;
