import React, { createContext, useReducer } from "react";

import Header from "./components/header";
import Introduction from "./components/intro";
import Content from "./components/body/index";
import styled from "styled-components";
import Advert from "./components/ads";
import Footer from "./components/footer";
import { contextState, initialContext, stateReducer } from "./store/contextstate";
import contextStore from "./store/reducer";


export const ContextState = createContext<contextState>(initialContext);

function App() {
  const [state, dispatch] = useReducer(contextStore,stateReducer);

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
