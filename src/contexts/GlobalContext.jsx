import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { getAllGroups, getAllCustomers } from '../fetches';

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [warning, setWarning] = useState('');
  const [groups, setGroups] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const initialFetch = async () => {
      const responseGroups = await getAllGroups();
      const responseCustomers = await getAllCustomers();
      setGroups(responseGroups);
      setCustomers(responseCustomers);
    };
    initialFetch();
    return () => {
      setGroups([]);
      setCustomers([]);
      setWarning('');
    };
  }, []);

  const context = {
    warning,
    setWarning,
    groups,
    setGroups,
    customers,
    setCustomers,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <GlobalContext.Provider
      value={contextMemo}
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default GlobalProvider;
