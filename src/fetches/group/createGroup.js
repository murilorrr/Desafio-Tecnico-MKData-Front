import api from '../api';

async function createGroup(group) {
  const response = await api
    .post('/groups', group)
    .then((response) => response.data)
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default createGroup;