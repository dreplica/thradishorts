import React from 'react';

import Button from '../button';
import {
    Container,
    Title
 } from './style'
export default function Advert() {
  return (
      <Container>
          <Title>Boost your links today</Title>
          <Button
              padding={{ left: 15, top: 7 }}
              text='Get Started'
              radius={30}
          />
    </Container>
  );
}
