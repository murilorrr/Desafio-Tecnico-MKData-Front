import styled from 'styled-components';

const ErrorMessage = styled.div`
display:none;
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: #00000057;
z-index: 50;
justify-content: center;
align-items: center;

&.error {
  display: flex;
}

div {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1rem;
}
`;

export default ErrorMessage;
