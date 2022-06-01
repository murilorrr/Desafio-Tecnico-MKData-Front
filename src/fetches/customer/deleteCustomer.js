import api from '../api';

async function deleteCustomer(id) {
  const deleteRequest = await api
    .delete(`/customers/${id}`)
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return deleteRequest;
}

export default deleteCustomer;
