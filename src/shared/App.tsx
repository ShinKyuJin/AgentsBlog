import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/theme";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../styles/GlobalStyles";
import { ME_QUERY, me_set } from "../store/modules/me";
import { useDispatch } from "react-redux";
import { MeProps } from "../models/user";
import Header from "../components/modules/Header/HeaderContainer";
import { gql, useQuery } from "@apollo/client";

const App = () => {
  const isLoggedIn: boolean = useQuery(LOGIN_QUERY).data.isLoggedIn;
  const { data } = useQuery<{ me: MeProps }>(ME_QUERY);
  const dispatch = useDispatch();
  if (data && data.me) {
    dispatch(me_set(data.me));
  }
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Header isLoggedIn={isLoggedIn} />
        <Routes isLoggedIn={isLoggedIn} />
      </Wrapper>
      <ToastContainer position={"bottom-left"} autoClose={3000} />
    </ThemeProvider>
  );
};

export const LOGIN_QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

//background-color: ${(props) => props.theme.bgColor};

export default App;
