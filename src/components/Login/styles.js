import styled from 'styled-components';

export const Content = styled.div`
  width: 80vw;
  min-height: 80vh;
  margin: 10vh auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  width: 40vw;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Input = styled.input`
    display: block;
    width: 95%;
    box-shadow: 0 0 15px rgb(0 0 0 / 5%);
    font-size: 15px;
    border: 1px solid var(--gray-100);
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5em 0;
    color: var(--gray-500);
    font-weight: 400;
`;

export const Label = styled.label`
  color: #405c60;
  position: relative;
`;

export const Button = styled.button`
  width: 95%;
  cursor: pointer;
  background: var(--crimson);
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-shadow: 0 1px 1px #333;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  transition: all 0.2s linear;

  &:disabled {
    opacity: 0.5;
  }
`;
