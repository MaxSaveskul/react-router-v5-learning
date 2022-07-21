import styled from "styled-components";

export const StyledButton = styled.button`
  color: #f8fbff;
  text-align: center;
  margin-top: 10px;
  background-color: darkred;
  font-size: 15px;
  border: none;
  font-weight: bold;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  width: 80px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const HomepageContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;
