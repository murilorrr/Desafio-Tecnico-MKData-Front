import React from 'react';
import GroupList from '../components/Group/GroupList';
import GroupCreateForm from '../components/Group/GroupCreateForm';

function GroupPage() {

  return (
    <main>
      <GroupCreateForm />
      <GroupList />
    </main>
  );
}

export default GroupPage;