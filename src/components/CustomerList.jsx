import React, { useEffect, useState } from "react";
import {
  getAllCustomers,
} from '../fetches';
import CustomerLine from '../components/CustomerLine';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCustomers();
      console.log(response);
      setCustomers(response);
    };
    fetchData();
    return () => {
      setCustomers([]);
    };
  }, []);
  return(
    <div>
    { customers.length >= 1 ? customers
      .map((user, index) => (<CustomerLine
        customer={ user }
        key={ index }
        index={ index }
      />)) : <div>Nenhum Cliente ainda</div>}
  </div>
  );
}

export default CustomerList;