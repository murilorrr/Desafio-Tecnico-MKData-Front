import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { getAllGroups } from "../fetches";

function CustomersCreateForm() {
  const date = new Date();
  const initialDatePlaceholder = String(date.getFullYear().toString() +'-'+ date.getMonth().toString().padStart(2, '0') +'-'+ date.getDay().toString().padStart(2, '0'))
  const [customerCreate, setCustomerCreate] = useState({
    name: '',
    type: 'cpf',
    dataDeCadastro: initialDatePlaceholder,
    group: '',
    inscricaoUnica: '',
    cadastroUnico: '',
  });

  const [warning, setWarning] = useState('');
  const [groups, setGroups] = useState([]);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    const fetchAllGroups = async () => {
      const response = await getAllGroups()
      response && setGroups(response);
      setCustomerCreate({...customerCreate, group: response[0].name});
    }
    fetchAllGroups();
    return () => {
      setGroups([]);
    };
  }, []);
  

  useEffect(() => {
    const validateCustomer = () => Object.keys(customerCreate).every((key) => key !== '');
    if (validateCustomer()) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [customerCreate]);

  const clearInputs = () => {
    setCustomerCreate({
      name: '',
      type: '',
      dataDeCadastro: initialDatePlaceholder,
      group: '',
      inscricaoUnica: '',
      cadastroUnico: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const twoSeconds = 2000;

    // const { error: message } = await createCustomer(customerCreate);
    // if (message) {
    //   setWarning(message);
    //   setTimeout(() => setWarning(''), twoSeconds);
    // }
    clearInputs();
  };

  const {name, type, dataDeCadastro, group, inscricaoUnica, cadastroUnico } = customerCreate

  return(
    <FormCreateAnyUser onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        id="name"
        value={ name }
        onChange={ ({ target }) => setCustomerCreate({...customerCreate, name: target.value}) }
      />
      <select
      value={ type }
      name="type"
      id="type"
      onChange={ ({ target }) => setCustomerCreate({...customerCreate, type: target.value}) }
      >
      <option value="cpf">CPF</option>
      <option value="cnpj">CNPJ</option>
    </select>
    <input
      type="text"
      name="inscricaoUnica"
      id="inscricaoUnica"
      value={ inscricaoUnica }
      placeholder="Inscricão Unica(CPF ou CNPJ)"
      onChange={ ({ target }) => setCustomerCreate({...customerCreate, inscricaoUnica: target.value}) }
    />
    <input
      type="text"
      name="cadastroUnico"
      id="cadastroUnico"
      value={ cadastroUnico }
      placeholder="Cadastro Unico (RG ou IE)"
      onChange={ ({ target }) => setCustomerCreate({...customerCreate, cadastroUnico: target.value}) }
    />
    <input
      type="text"
      name="dataDeCadastro"
      id="dataDeCadastro"
      value={ dataDeCadastro }
      placeholder="Data De Cadastro"
      onChange={ ({ target }) => setCustomerCreate({...customerCreate, dataDeCadastro: target.value}) }
    />
    <select
    value={ group }
    name="group"
    id="group"
    onChange={ ({ target }) => setCustomerCreate({...customerCreate, group: target.value}) }
  >
    { groups.map((group) => group.activated === true && <option value={group.name}>{group.name}</option>)}
  </select>

    <button
      data-testid="admin_manage__button-register"
      type="submit"
      disabled={ disableButton }
    >
      Cadastrar

    </button>
    <div
      className={ warning !== '' ? 'error' : '' }
      visible={ warning === '' }
    >
      <div>{warning}</div>
    </div>
    </FormCreateAnyUser>
  );
}

const FormCreateAnyUser = styled.form`
  margin: 0.5rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed var(--gray-200);

  input {
    display: block;
    width: -webkit-fill-available;
    box-shadow: 0 0 15px rgb(0,0,0,0.05);
    font-size: 18px;
    border: 1px solid var(--gray-100);
    border-radius: 2rem;
    padding: 1rem;
    margin: 0.5em 0;
    color: var(--gray-500);
    font-weight: 400;
    /* height: 4rem; */

  }

  select {
    /* background: var(--crimson); */
    /* border: 2px solid var(--crimson); */
    border-radius: 2rem;
    width: 100%;
    padding: 1rem;
    font-size: 18px;
    margin: 0.5rem;
    background: var(--gray-50);
    color: var(--gray-500);
    box-shadow: 0 0 15px rgb(0,0,0,0.05);
    border: none;
    font-weight: 400;
    /* height: 4rem; */

    option {
      color: var(--gray-500);
    }
  }

  button {
    background: var(--crimson);
    font-weight: 600;
    /* width: 5.5rem; */
    width: 100%;
    /* height: 2rem; */
    border-radius: 2rem;
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

export default CustomersCreateForm;