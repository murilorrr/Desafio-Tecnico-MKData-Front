import React from 'react';
import CustomersList from '../components/CustomerList';
import CustomersCreateForm from '../components/CustomersCreateForm';

function CustomerPage() {

  return (
    <main>
      <CustomersCreateForm />
      <CustomersList />
    </main>
  );
}

export default CustomerPage;