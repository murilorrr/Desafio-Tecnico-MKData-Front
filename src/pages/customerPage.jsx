import React from 'react';
import styled from 'styled-components';
import CustomersList from '../components/Customer/CustomerList';
import CustomersCreateForm from '../components/Customer/CustomersCreateForm';

function CustomerPage() {
  return (
    <Content>
      <CustomersCreateForm />
      <CustomersList />
    </Content>
  );
}

const Content = styled.div`
  margin: 1em;
`;

export default CustomerPage;