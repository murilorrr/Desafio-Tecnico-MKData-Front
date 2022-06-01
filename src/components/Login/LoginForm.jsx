import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import Warning from '../Warning/warning';
import * as S from './styles';

function LoginForm() {
  const { setWarning } = useContext(GlobalContext);

  const history = useHistory();

  const rootUser = {
    login: 'root',
    cadastroUnico: 'root',
  };

  const [user, setUser] = useState({
    login: '',
    cadastroUnico: '',
  });

  const [disableButton, setDisableButton] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const validateUser = () => Object.values(user).every((value) => value !== '');
    if (validateUser()) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const twoSeconds = 2000;

    if (Object.keys(user).every((key) => user[key] === rootUser[key])) {
      history.push('/customers');
    } else {
      setWarning('Credenciais incorretas');
      setTimeout(() => setWarning(''), twoSeconds);
    }

    setUser({
      login: '',
      cadastroUnico: '',
    });
  };

  return (
    <S.Content>
      <S.Form onSubmit={handleSubmit}>
        <S.Label for="login">Login</S.Label>
        <S.Input
          id="login"
          type="text"
          name="login"
          placeholder="Seu nome"
          onChange={handleChange}
          value={user.login}
        />
        <S.Label for="cadastroUnico">Cadastro Unico</S.Label>
        <S.Input
          id="cadastroUnico"
          type="text"
          name="cadastroUnico"
          onChange={handleChange}
          value={user.cadastroUnico}
          placeholder="RG Exemplo: 11.223.441-22"
        />
        <S.Button disabled={disableButton} type="submit">Login</S.Button>
      </S.Form>
      <Warning />
    </S.Content>
  );
}

export default LoginForm;
