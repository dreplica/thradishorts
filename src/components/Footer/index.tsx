import React from 'react';
import List from './components/list';

export default function Footer() {
  return (
      <Container>
          <Logo>
              <image src='/' alt='logo' />
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

    </Container>
  );
}
