import React from 'react';
import styled from 'styled-components';
import CustomersList from '../components/Customer/CustomerList';
import CustomersCreateForm from '../components/Customer/CustomersCreateForm';
import HeaderPages from '../components/Header/HeaderPages';

function CustomerPage() {
  return (
    <Content>
      <HeaderPages />
      <CustomersCreateForm />
      <CustomersList />
    </Content>
  );
}

const Content = styled.div`
  margin: 1em;
`;

export default CustomerPage;
