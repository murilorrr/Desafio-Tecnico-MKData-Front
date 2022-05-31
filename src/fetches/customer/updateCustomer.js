import api from '../api';

async function updateCustomer(customer, id) {
  const response = await api
    .put('/customers/'+id, customer)
    .then((response) => response.data)
    .catch((err) => console.log(err.response.data));
  return response;
}

export default updateCustomer;