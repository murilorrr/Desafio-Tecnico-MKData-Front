import React from 'react';
import styled from 'styled-components';
import GroupList from '../components/Group/GroupList';
import GroupCreateForm from '../components/Group/GroupCreateForm';
import HeaderPages from '../components/Header/HeaderPages';

function GroupPage() {
  return (
    <>
      <HeaderPages />
      <Content>
        <GroupCreateForm />
        <GroupList />
      </Content>
    </>
  );
}

const Content = styled.div`
  margin: 1em;
`;

export default GroupPage;
