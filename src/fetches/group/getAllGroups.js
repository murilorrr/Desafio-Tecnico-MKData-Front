import api from '../api';

async function getAllGroups() {
  const response = await api
    .get('/groups')
    .then((response) => (response.data))
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default getAllGroups;