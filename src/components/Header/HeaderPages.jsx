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
          <Li><A href="customers">Clientes</A></Li>
          <Li><A href="groups">Grupos</A></Li>
          <Li><A href="/">Login</A></Li>
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
  color: var(--gray-50);
`;

const A = styled.a`
  transition: 0.3s;
  &:hover {
    color: var(--gray-200);
  }
`;

export default HeaderPages;
