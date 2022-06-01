import React, { useState } from 'react';
import styled from 'styled-components';
import { updateGroup, deleteGroup } from '../../fetches';
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import EditedButton from '../Buttons/EditedButton';

function GroupCard({ group: { name, id, activated } }) {
  const initialKeys = {
    name,
    activated,
  };
  const [groupEdit, setGroupEdit] = useState(initialKeys);
  const [edit, setEdit] = useState(false);

  const defaultGroupCard = () => (
    <Div id={id}>
      <p>
        Nome do Grupo:
        {groupEdit.name}
      </p>
      <p>
        Ativo:
        {groupEdit.activated.toString() === 'true' ? 'ativo' : 'não ativo'}
      </p>
      <EditButton callback={() => {
        setEdit(true);
      }}
      />
      <DeleteButton callback={async () => {
        await deleteGroup(id);
      }}
      />
    </Div>
  );

  const editGroupCard = () => {
    const handleChange = ({ target }) => {
      const { name: key, value } = target;
      setGroupEdit({ ...groupEdit, [key]: value });
      return undefined;
    };

    return (
      <DivEdit>
        <div id={id}>
          <input
            type="text"
            name="name"
            id="name"
            value={groupEdit.name}
            onChange={handleChange}
            placeholder="Nome do Gropo"
          />
          <select
            onChange={handleChange}
            name="activated"
            value={groupEdit.activated}
          >
            <option value="true">Ativo</option>
            <option value="false">Não Ativo</option>
          </select>
        </div>
        <div className="buttons">
          <EditedButton callback={async () => {
            await updateGroup(groupEdit, id);
            setEdit(false);
          }}
          />
        </div>

      </DivEdit>
    );
  };

  if (edit) {
    return editGroupCard();
  }
  return defaultGroupCard();
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

export default GroupCard;
