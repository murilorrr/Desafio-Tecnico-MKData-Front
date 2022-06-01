import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { createGroup } from '../../fetches';
import { GlobalContext } from '../../contexts/GlobalContext';
import Warning from '../Warning/warning';

function GroupCreateForm() {
  const initialKeys = {
    name: '',
  };
  const [groupCreate, setGroupCreate] = useState(initialKeys);

  const { setWarning } = useContext(GlobalContext);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    const validateGroup = () => Object.keys(groupCreate).every((key) => key !== initialKeys.key);
    if (validateGroup()) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [groupCreate, initialKeys.key]);

  const clearInputs = () => {
    setGroupCreate({
      name: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const twoSeconds = 2000;

    const { err: { message } } = await createGroup(groupCreate);
    if (message) {
      setWarning(message);
    } else {
      setWarning('Algo deu errado com a criação do Grupo!');
    }
    setTimeout(() => setWarning(''), twoSeconds);
    clearInputs();
  };

  return (
    <div>
      <h1>CRIAR GRUPO</h1>
      <FormCreateAnyUser onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Grupo"
          name="name"
          id="name"
          value={groupCreate.name}
          onChange={({ target }) => setGroupCreate({ ...groupCreate, name: target.value })}
        />
        <button
          type="submit"
          disabled={disableButton}
        >
          Cadastrar
        </button>
        <Warning />
      </FormCreateAnyUser>
    </div>
  );
}

const FormCreateAnyUser = styled.form`
  margin: 0.5rem 0 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px dashed var(--gray-200);

  input {
    display: block;
    width: 60%;
    box-shadow: 0 0 15px rgb(0,0,0,0.05);
    font-size: 18px;
    border: 1px solid var(--gray-100);
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5em 0;
    color: var(--gray-500);
    font-weight: 400;
    /* height: 4rem; */

  }

  button {
    background: var(--crimson);
    font-weight: 600;
    /* width: 5.5rem; */
    width: 100%;
    /* height: 2rem; */
    border-radius: 1rem;
    color: var(--gray-50);
    margin: 0.5rem 0 1.2rem;
    padding: 1rem;
    font-size: 0.90rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 15px rgb(0,0,0,0.05);
  }
`;

export default GroupCreateForm;
