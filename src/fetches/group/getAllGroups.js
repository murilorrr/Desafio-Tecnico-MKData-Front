import api from '../api';

async function getAllGroups() {
  const getRequest = await api
    .get('/groups')
    .then((response) => (response.data))
    .catch((err) => ({ err: err.response.data }));
  return getRequest;
}

export default getAllGroups;
