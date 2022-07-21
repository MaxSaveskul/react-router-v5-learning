import { HeaderContainer, StyledNavLink } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <StyledNavLink to="/user">User Panel</StyledNavLink>
        <StyledNavLink to="/some-not-existing-url">
          Example of Not Found Page
        </StyledNavLink>
      </div>
      <div></div>
    </HeaderContainer>
  );
};

export default Header;
