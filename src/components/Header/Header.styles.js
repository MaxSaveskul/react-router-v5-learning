import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: purple;
  padding: 20px;
  color: white;
  border-radius: 10px;
`;

export const StyledNavLink = styled(Link)`
  color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;

  &: hover {
    background-color: #242539;
  }
`;
