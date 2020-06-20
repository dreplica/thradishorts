import React, { createContext, useReducer } from "react";

import Header from "./components/header";
import Introduction from "./components/intro";
import Content from "./components/body/index";
import styled from "styled-components";
import Advert from "./components/ads";
import Footer from "./components/footer";
import {
  contextState,
  initialContext,
  stateReducer,
} from "./store/contextstate";
import contextStore from "./store/reducer";

export const ContextState = createContext<contextState>(initialContext);

function App() {
  const [state, dispatch] = useReducer(contextStore, stateReducer);

  return (
    <ContextState.Provider value={{ state, dispatch }}>
      <Container>
        {state.loading && <Loader src="./assets/mancomp.gif" alt="loader" />}
        <Header />
        <Introduction />
        <Content />
        <Advert />
        <Footer />
      </Container>
    </ContextState.Provider>
  );
}

export default App;

const Container = styled.main`
  width: 100%;
  margin: auto;
`;

const Loader = styled.img`
  position: fixed;
  width: 90%;
  left:5%;
  height: 100vh;
  z-index:10;
`;
