import api from '../api';

async function deleteCustomer(id) {
  const response = await api
    .delete('/customers/'+id)
    .then((response) => response.data)
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default deleteCustomer;