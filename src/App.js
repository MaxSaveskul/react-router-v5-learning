import Header from "./components/Header/Header.component";
import HomePage from "./components/HomePage/HomePage.component";
import LoginPage from "./components/LoginPage/LoginPage.component";
import ErrorPage from "./components/ErrorPage/ErrorPage.component";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  	body {
	background-color: #242539;
  padding-top: 10px;
	color: white;
	font-size: 17px;
  font-family: sans-serif;
}
  h2 {
    color: white;
  }
}
`;

const AppContainer = styled.div`
  background-color: #151520;
  max-width: 1000px;
  min-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  min-height: 100vh;
  padding: 20px;
`;

const auth = localStorage.login && localStorage.password;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Switch>
          <Route path="/" exact>
            {auth ? <Redirect to="/user" /> : <LoginPage />}
          </Route>
          <Route path="/user/:id">
            <HomePage auth={auth} />
          </Route>
          <Route path="/user">
            <HomePage auth={auth} />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}
