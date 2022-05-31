import api from '../api';

async function updateGroup(group, id) {
  const response = await api
    .put('/groups/'+id, group)
    .then((response) => response.data)
    .catch((err) => ({err: err.response.data}));
  return response;
}

export default updateGroup;