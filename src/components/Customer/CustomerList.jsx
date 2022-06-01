import React, { useEffect, useContext } from 'react';
import {
  getAllCustomers,
} from '../../fetches';
import CustomerCard from './CustomerCard';
import { GlobalContext } from '../../contexts/GlobalContext';

function CustomerList() {
  const { setCustomers, customers } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCustomers();
      setCustomers(response);
    };
    fetchData();
  }, []);
  return (
    <article>
      <h1>LISTAGEM DE CLIENTES</h1>
      <div>
        { customers.length >= 1 ? customers
          .map((customer, index) => (
            <CustomerCard
              customer={customer}
              key={customer.id}
              index={index}
            />
          )) : <div>Nenhum Cliente ainda</div>}
      </div>
    </article>
  );
}

export default CustomerList;
