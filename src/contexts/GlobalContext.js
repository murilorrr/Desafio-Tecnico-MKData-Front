import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [warning, setWarning] = useState('');

  const context = {
    warning,
    setWarning,
  };

  return (
    <GlobalContext.Provider
      value={ context }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default GlobalProvider;