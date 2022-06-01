import api from '../api';

async function updateCustomer(customer, id) {
  const updateRequest = await api
    .put(`/customers/${id}`, customer)
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return updateRequest;
}

export default updateCustomer;
