import api from '../api';

async function updateGroup(id) {
  const response = await api
    .delete('/groups/'+id)
    .then((response) => response.data)
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default updateGroup;