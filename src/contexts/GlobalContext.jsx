import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [warning, setWarning] = useState('');
  const [groups, setGroups] = useState([]);
  const [customers, setCustomers] = useState([]);

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
