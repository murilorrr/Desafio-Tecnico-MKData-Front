import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import * as S from './styles';

function Warning() {
  const twoSeconds = 2000;
  const { warning, setWarning } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => setWarning(''), twoSeconds);
  }, [setWarning, warning]);

  return (
    <S.ErrorMessage
      className={ warning !== '' ? 'error' : '' }
      visible={ warning === 'true'? 'true' : 'false' }
    >
      <div>{warning}</div>
    </S.ErrorMessage>
  );
}

export default Warning;