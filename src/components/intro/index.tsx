import React from 'react';

import Urlpath from './url';
import Button from '../button';
import {
  Container,
  Text,
  Title,
  Content,
  SubText,
  Image
} from "./style";

export default function Introduction() {
  return <Container>
    <Content>
      <Text>
        <Title>More than just shorted links</Title>
        <SubText>
          your one stop spot for short links,
          create an account to save all the links you've shorten.
          </SubText>
        <Button padding={{ left: 20 }} radius={20} text='Get started' />
      </Text>
      <Image>
        <img src={"/assets/illustration-working.svg"} alt='desktop' />
      </Image>
    </Content>
    <Urlpath />
  </Container>
}
