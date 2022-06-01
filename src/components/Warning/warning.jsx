import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import ErrorMessage from './styles';

function Warning() {
  const twoSeconds = 2000;
  const { warning, setWarning } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => setWarning(''), twoSeconds);
  }, [setWarning, warning]);

  return (
    <ErrorMessage
      className={warning !== '' ? 'error' : ''}
      visible={warning === 'true' ? 'true' : 'false'}
    >
      <div>{warning}</div>
    </ErrorMessage>
  );
}

export default Warning;
