import React from 'react';
import List from './components/list';
import Data from '../../util/getList.json'
import {Container, Logo, Listing} from './style'
import SocialLinks from './components/sociallinks';

export default function Footer() {
  return (
      <Container>
          <Logo>
              <img src='./assets/logo.svg' alt='logo' />
          </Logo>
          <Listing>
              {
                  Data.map((items, index) => <List
                      key={index}
                      list={items.list}
                      title={items.title}
                  />)
              }
          </Listing>
        <SocialLinks/>
    </Container>
  );
}
