import React from 'react';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';

function HeaderPages() {
  // const history = useHistory();
  // function redirect(page) {
  //   history.push(`/${page}`);
  // }

  return (
    <header>
      <nav>
        <Ul>
          <Li><a href="customers">Clientes</a></Li>
          <Li><a href="groups">Grupos</a></Li>
          <Li><a href="/">Login</a></Li>
        </Ul>
      </nav>
    </header>
  );
}

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;

  li:last-child {
    float: right;
  }
`;

const Li = styled.li`
  float: left;
  padding: 1em;
`;

export default HeaderPages;
