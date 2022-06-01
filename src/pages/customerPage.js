import React from 'react';
import CustomersList from '../components/Customer/CustomerList';
import CustomersCreateForm from '../components/Customer/CustomersCreateForm';

function CustomerPage() {

  return (
    <main>
      <CustomersCreateForm />
      <CustomersList />
    </main>
  );
}

export default CustomerPage;