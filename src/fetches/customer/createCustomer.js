import api from '../api';

async function createCustomer(customer) {
  const postRequest = await api
    .post('/customers', customer)
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return postRequest;
}

export default createCustomer;
