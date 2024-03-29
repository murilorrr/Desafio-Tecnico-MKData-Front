import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { getAllGroups, createCustomer } from '../../fetches';
import { GlobalContext } from '../../contexts/GlobalContext';
import Warning from '../Warning/warning';

function CustomersCreateForm() {
  const date = new Date();
  const initialDatePlaceholder = String(`${date.getFullYear().toString()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')}`);
  const initialKeys = {
    name: '',
    type: 'cpf',
    dataDeCadastro: initialDatePlaceholder,
    group: '',
    inscricaoUnica: '',
    cadastroUnico: '',
  };
  const { setWarning } = useContext(GlobalContext);

  const [customerCreate, setCustomerCreate] = useState(initialKeys);

  const [groups, setGroups] = useState([]);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    const fetchAllGroups = async () => {
      const response = await getAllGroups();
      setGroups(response);
      setCustomerCreate((c) => {
        const customerCopy = c;
        customerCopy.group = response[0].name;
        return customerCopy;
      });
    };
    fetchAllGroups();
    return () => {
      setGroups([]);
    };
  }, []);

  useEffect(() => {
    const validateCustomer = () => Object.keys(customerCreate)
      .some((key) => key !== initialKeys.key);
    if (validateCustomer()) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [customerCreate, initialKeys.key]);

  const clearInputs = () => {
    setCustomerCreate({
      name: '',
      type: 'cpf',
      dataDeCadastro: initialDatePlaceholder,
      group: '',
      inscricaoUnica: '',
      cadastroUnico: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createCustomer(customerCreate);
    if (response.err) {
      if (response.err.message) {
        setWarning(response.err.message);
      }
      if (response.err.name || response.err.inscricaoUnica || response.err.cadastroUnico) {
        setWarning('Verifique chaves em branco');
      }
      if (!response.err) {
        clearInputs();
      }
    }
  };

  const {
    name, type, dataDeCadastro, group, inscricaoUnica, cadastroUnico,
  } = customerCreate;

  return (
    <div>
      <h1>CRIAR CLIENTE</h1>
      <FormCreateAnyUser onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          id="name"
          value={name}
          onChange={({ target }) => setCustomerCreate({ ...customerCreate, name: target.value })}
        />
        <select
          value={type}
          name="type"
          id="type"
          onChange={({ target }) => setCustomerCreate({ ...customerCreate, type: target.value })}
        >
          <option value="cpf">CPF</option>
          <option value="cnpj">CNPJ</option>
        </select>
        <input
          type="text"
          name="inscricaoUnica"
          id="inscricaoUnica"
          value={inscricaoUnica}
          placeholder="Inscricão Unica(CPF ou CNPJ)"
          onChange={({ target }) => setCustomerCreate(
            { ...customerCreate, inscricaoUnica: target.value },
          )}
        />
        <input
          type="text"
          name="cadastroUnico"
          id="cadastroUnico"
          value={cadastroUnico}
          placeholder="Cadastro Unico (RG ou IE)"
          onChange={({ target }) => setCustomerCreate(
            { ...customerCreate, cadastroUnico: target.value },
          )}
        />
        <input
          type="text"
          name="dataDeCadastro"
          id="dataDeCadastro"
          value={dataDeCadastro}
          placeholder="Data De Cadastro"
          onChange={({ target }) => setCustomerCreate(
            { ...customerCreate, dataDeCadastro: target.value },
          )}
        />
        <select
          value={group}
          name="group"
          id="group"
          onChange={({ target }) => setCustomerCreate({ ...customerCreate, group: target.value })}
        >
          { groups.map((
            { name: groupSelectName, id: idGroup, activated },
          ) => activated === true && (
          <option
            key={idGroup}
            value={groupSelectName}
          >
            {groupSelectName}
          </option>
          ))}
        </select>

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
    font-size: 14px;
    border: 1px solid var(--gray-100);
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5em 0;
    color: var(--gray-500);
    font-weight: 400;
    /* height: 4rem; */

  }

  select {
    /* background: var(--crimson); */
    /* border: 2px solid var(--crimson); */
    border-radius: 1rem;
    width: 30%;
    padding: 1rem;
    font-size: 14px;
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
    border-radius: 1rem;
    color: var(--gray-50);
    margin: 0.5rem 0 1.2rem;
    padding: 1rem;
    font-size: 1.20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 15px rgb(0,0,0,0.05);
  }
`;

export default CustomersCreateForm;
