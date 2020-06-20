import React from 'react';

import {Container,Title,Content} from './style'
interface Iprops{
    list: string[];
    title: string;
}

export default function List(props:Iprops) {
  return (
      <Container>
          <Title>{props.title}</Title>
          <Content>
            {
            props.list.map((item,ind) => <li key={ind}><a href='/'>{item}</a></li>)
            }
          </Content>
    </Container>
  );
}
