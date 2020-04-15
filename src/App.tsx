import React from 'react';
import Header from './components/header';
import Introduction from './components/intro';
import Content from './components/body/index';
import styled from 'styled-components';
import Advert from './components/Ads';

function App() {
  // console.log()
  return (
    <Container>
      <Header />
      <Introduction />
      <Content />
      <Advert />
    </Container>
  );
}

export default App;

const Container = styled.main`
  width:100%;
`
