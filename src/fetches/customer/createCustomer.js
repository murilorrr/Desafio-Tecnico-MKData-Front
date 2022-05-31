import api from '../api';

async function createCustomer(customer) {
  const response = await api
    .post('/customers', customer)
    .then((response) => response.data)
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default createCustomer;