import api from '../api';

async function createGroup(group) {
  const postRequest = await api
    .post('/groups', group)
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return postRequest;
}

export default createGroup;
