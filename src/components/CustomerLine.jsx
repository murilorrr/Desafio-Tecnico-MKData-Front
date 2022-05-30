import React from 'react';
import styled from 'styled-components'

const DIV = styled.div`
  border: 1px solid black;
  display: flexbox;
  flex-direction: row;
`

function CustomerLine({ customer: { id, name, activated, dataDeCadastro, group: { name: groupName, groupId, groupActivated }, inscricaoUnica, cadastroUnico, type }, index }) {

  return(
    <DIV id={index}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{type}</p>
      <p>{cadastroUnico}</p>
      <p>{dataDeCadastro}</p>
      <p>{groupName}</p>
      <p>{inscricaoUnica}</p>
      <p>{activated}</p>
    </DIV>
  );
}

export default CustomerLine;