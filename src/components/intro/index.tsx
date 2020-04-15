import React from 'react';

import Button from '../button';
import {
  Container,
  Text,
  Title,
  Content,
  SubText,
  Image
 } from "./style";
import Urlpath from '../url';
export default function Introduction() {
  return <Container>
    <Content>
        <Text>
          <Title>More than just shorted links</Title>
          <SubText>
            Build your brand's recognition and get 
            detailed insignts on how your links are performing
          </SubText>
          <Button padding={{left:20}} radius={20} text='Get started'/>
        </Text>
        <Image>
          <img src={"/assets/illustration-working.svg"} alt='desktop' />
        </Image>
    </Content>
      <Urlpath />
  </Container>
  }
