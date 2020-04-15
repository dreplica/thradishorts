import React from 'react';

import {
    Container,
    Title,
    Image,
    Description
} from './style'

interface Iprops {
    image?:string;
    title?:string;
    description?:string;
    margin?:number;
}

export default function Card(props:Iprops) {
  return (
    <Container style={{
        marginTop:props.margin
    }}>
        <Image>
            <img src={props.image} alt='description' />
        </Image>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
    </Container>
  );
}
