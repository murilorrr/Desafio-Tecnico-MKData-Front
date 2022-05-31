import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllGroups, updateCustomer, deleteCustomer } from "../fetches";

const Div = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`

const DivEdit = styled.div`
  display: flex;
  flex-direction: column;
`

function CustomerLine({ customer: { id, name, activated, dataDeCadastro, group: { name: groupName, groupId, groupActivated }, inscricaoUnica, cadastroUnico, type }, index }) {
  console.log(id);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchAllGroups = async () => {
      const response = await getAllGroups()
      response && setGroups(response);
    }
    fetchAllGroups();
    return () => {
      setGroups([]);
    };
  }, []);

  const initialKeys = {
    name,
    type,
    dataDeCadastro,
    group: groupName,
    inscricaoUnica,
    cadastroUnico,
    activated,
  }
  const [customerEdit, setCustomerEdit] = useState(initialKeys);
  const [edit, setEdit] = useState(false);

  const defaultHTMLToVisualization = () => {
    return(
      <Div key={index} id={id}>
        <p>Nome: {customerEdit.name}</p>
        <p>Tipo: {customerEdit.type}</p>
        <p>Cadatro Unico: {customerEdit.cadastroUnico}</p>
        <p>Data: {customerEdit.dataDeCadastro}</p>
        <p>Grupo: {customerEdit.group}</p>
        <p>Inscrição: {customerEdit.inscricaoUnica}</p>
        <p>Ativo: {customerEdit.activated.toString() === "true" ? 'ativo' : 'não ativo'}</p>
        <button
          type="button"
          onClick={() => {
            setEdit(true);
          }}
          >
          EDIT
        </button>
        <button
          type="button"
          onClick={async () => {
            await deleteCustomer(id);
          }}
        >
          DELETE
        </button>
      </Div>
    );
  };

  const editHTMLToVisualization = () => {
    const handleChange = ({ target }) => {
      const { name, value } = target;
      setCustomerEdit({...customerEdit, [name]: value});
      return undefined;
    };

    return (
      <DivEdit
        id={id}>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            name="name"
            id="name"
            value={customerEdit.name}
            onChange={handleChange}
            placeholder="Nome"
          />
          <select
            onChange={handleChange}
            name="type"
            value={customerEdit.type}
            aria-label="select one">
            <option value="cpf">CPF</option>
            <option value="cnpj">CNPJ</option>
          </select>
          </div>
          <input
            type="text"
            name="cadastroUnico"
            onChange={handleChange}
            placeholder="234.215.511-66"
            id="cadastroUnico"
            value={customerEdit.cadastroUnico}
          />
          <input
            type="text"
            name="inscricaoUnica"
            onChange={handleChange}
            placeholder="42.152.666-15"
            id="inscricaoUnica"
            value={customerEdit.inscricaoUnica}
          />
          <select
              value={ customerEdit.group }
              onChange={handleChange}
              name="group"
              id="group"
            >
              { groups.map((group, index) => group.activated === true && <option key={index} value={group.name}>{group.name}</option>)}
          </select>
          <select
            onChange={handleChange}
            name="activated"
            value={customerEdit.activated}>
            <option value="true">Ativo</option>
            <option value="false">Não Ativo</option>
          </select>

        <div className="buttons">
          <button
            type="button"
            onClick={async () => {
              await updateCustomer(customerEdit, id);
              setEdit(false);
            }}
            >
            EDITED
          </button>
        </div>
      </DivEdit>
    );
  };

  if (edit) {
    return editHTMLToVisualization();
  }
  return defaultHTMLToVisualization();

}

export default CustomerLine;