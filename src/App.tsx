import React, { createContext, useReducer } from "react";

import Header from "./components/header";
import Introduction from "./components/intro";
import Content from "./components/body/index";
import styled from "styled-components";
import Advert from "./components/Ads";
import Footer from "./components/Footer";
import { contextState, initialContext } from "./util/contextState";
import contextStore from "./store/contextState";


export const ContextState = createContext<contextState>(initialContext);

function App() {
  const [state, dispatch] = useReducer(contextStore, []);

  return (
    <ContextState.Provider value={{state,dispatch}}>
      <Container>
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
