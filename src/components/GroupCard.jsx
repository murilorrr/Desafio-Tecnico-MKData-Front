import React, {useState} from "react";
import styled from 'styled-components'

function GroupCard({group: {name, id, activated}}) {

  const initialKeys = {
    name,
    activated,
  }
  const [groupEdit, setGroupEdit] = useState(initialKeys);
  const [edit, setEdit] = useState(false);

  const defaultGroupCard = () => {


    return(
      <Div id={id}>
        <p>Nome do Grupo: {groupEdit.name}</p>
        <p>Ativo: {groupEdit.activated.toString() === "true" ? 'ativo' : 'não ativo'}</p>
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
          // onClick={async () => {
          //   await deleteCustomer(id);
          // }}
        >
          DELETE
        </button>
      </Div>
    );
  }

  const editGroupCard = () => {

    const handleChange = ({ target }) => {
      const { name, value } = target;
      setGroupEdit({...groupEdit, [name]: value});
      return undefined;
    };

    return(
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
              value={groupEdit.activated}>
              <option value="true">Ativo</option>
              <option value="false">Não Ativo</option>
            </select>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={async () => {
            //   await updateCustomer(groupEdit, id);
              setEdit(false);
            }}
            >
            EDITED
          </button>
        </div>

      </DivEdit>
    );
  }
  
  if (edit) {
    return editGroupCard();
  }
  return defaultGroupCard();
}


const Div = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
`


const DivEdit = styled.div`
  display: flex;
  flex-direction: column;
`


export default GroupCard;