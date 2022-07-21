import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  margin: 10px;
  font-size: 20px;
  border: none;
  background: transparent;
  color: #f8fbff;
  border-bottom: 1px solid #ccc;
  outline: none;
  padding: 15px 3px 10px;
  font-family: inherit;

  &:first-child {
    margin-top: 80px;
  }

  &:focus {
    border-bottom: 1px solid purple;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  color: #f8fbff;
  text-align: center;
  margin-top: 10px;
  background-color: purple;
  font-size: 20px;
  border: none;
  font-weight: bold;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  width: 150px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;
  }
`;
