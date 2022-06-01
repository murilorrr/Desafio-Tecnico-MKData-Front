import api from '../api';

async function updateGroup(id) {
  const deleteRequest = await api
    .delete(`/groups/${id}`)
    .then((response) => response.data)
    .catch((err) => ({ err: err.response.data }));
  return deleteRequest;
}

export default updateGroup;
