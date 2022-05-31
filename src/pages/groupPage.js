import React from 'react';
import GroupList from '../components/GroupList';
import GroupCreateForm from '../components/GroupCreateForm';

function GroupPage() {

  return (
    <main>
      <GroupCreateForm />
      <GroupList />
    </main>
  );
}

export default GroupPage;