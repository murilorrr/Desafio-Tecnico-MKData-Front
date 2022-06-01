import api from '../api';

async function updateGroup(group, id) {
  const updateRequest = await api
    .put(`/groups/${id}`, group)
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return updateRequest;
}

export default updateGroup;
