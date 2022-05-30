import api from '../api';

async function getAllGroups() {
  const response = await api
    .get('/groups')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return response;
}

export default getAllGroups;