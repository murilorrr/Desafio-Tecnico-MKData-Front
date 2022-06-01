import React from 'react';
import GroupList from '../components/Group/GroupList';
import GroupCreateForm from '../components/Group/GroupCreateForm';
import styled from 'styled-components';

function GroupPage() {

  return (
    <Content>
      <GroupCreateForm />
      <GroupList />
    </Content>
  );
}

const Content = styled.div`
  margin: 1em;
`

export default GroupPage;