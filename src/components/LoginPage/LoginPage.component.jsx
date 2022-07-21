import { useState, useEffect, useRef } from "react";
import { Input, FormContainer, Button } from "./LoginPage.styles";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSumbit = (event) => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    history.push(`/user/${login}`);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSumbit}>
      <FormContainer>
        <Input placeholder="login" value={login} onChange={handleLogin} />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <Button type="submit">Submit</Button>
      </FormContainer>
    </form>
  );
};

export default LoginPage;
