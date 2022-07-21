import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { StyledButton, HomepageContainer } from "./HomePage.styles";

const HomePage = ({ auth }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!auth) {
      history.push("/");
    }
  }, [auth, history]);

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return (
    <HomepageContainer>
      <h1>Welcome{id ? `, ${id}!` : "!"}</h1>
      <StyledButton onClick={logout}>Logout</StyledButton>
    </HomepageContainer>
  );
};

export default HomePage;
