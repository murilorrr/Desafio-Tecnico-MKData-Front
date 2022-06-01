import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { getAllGroups, updateCustomer, deleteCustomer } from '../../fetches';
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import EditedButton from '../Buttons/EditedButton';
import { GlobalContext } from '../../contexts/GlobalContext';

function CustomerCard({
  customer: {
    id, name, activated, dataDeCadastro, group: {
      name: groupName,
    }, inscricaoUnica, cadastroUnico, type,
  }, index,
}) {
  const { setGroups, groups } = useContext(GlobalContext);

  useEffect(() => {
    const fetchAllGroups = async () => {
      const response = await getAllGroups();
      setGroups(response);
    };
    fetchAllGroups();
  }, []);

  const initialKeys = {
    name,
    type,
    dataDeCadastro,
    group: groupName,
    inscricaoUnica,
    cadastroUnico,
    activated,
  };
  const [customerEdit, setCustomerEdit] = useState(initialKeys);
  const [edit, setEdit] = useState(false);

  const defaultHTMLToVisualization = () => (
    <Div key={index} id={id}>
      <p>
        Nome:
        {customerEdit.name}
      </p>
      <p>
        Tipo:
        {customerEdit.type}
      </p>
      <p>
        Cadatro Unico:
        {customerEdit.cadastroUnico}
      </p>
      <p>
        Data:
        {customerEdit.dataDeCadastro}
      </p>
      <p>
        Grupo:
        {customerEdit.group}
      </p>
      <p>
        Inscrição:
        {customerEdit.inscricaoUnica}
      </p>
      <p>
        Ativo:
        {customerEdit.activated.toString() === 'true' ? 'ativo' : 'não ativo'}
      </p>
      <EditButton callback={() => {
        setEdit(true);
      }}
      />
      <DeleteButton callback={async () => {
        await deleteCustomer(id);
      }}
      />
    </Div>
  );

  const editHTMLToVisualization = () => {
    const handleChange = ({ target }) => {
      const { name: key, value } = target;
      setCustomerEdit({ ...customerEdit, [key]: value });
    };

    return (
      <DivEdit
        id={id}
      >
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
            aria-label="select one"
          >
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
          value={customerEdit.group}
          onChange={handleChange}
          name="group"
          id="group"
        >
          { groups.map(({
            name: groupSelectName,
            id: idSelect, activated: activatedSelect,
          }) => activatedSelect === true && (
          <option
            key={idSelect}
            value={groupSelectName}
          >
            {groupSelectName}
          </option>
          ))}
        </select>
        <select
          onChange={handleChange}
          name="activated"
          value={customerEdit.activated}
        >
          <option value="true">Ativo</option>
          <option value="false">Não Ativo</option>
        </select>

        <div className="buttons">
          <EditedButton callback={async () => {
            await updateCustomer(customerEdit, id);
            setEdit(false);
          }}
          />
        </div>
      </DivEdit>
    );
  };

  if (edit) {
    return editHTMLToVisualization();
  }
  return defaultHTMLToVisualization();
}

const Div = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const DivEdit = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CustomerCard;
