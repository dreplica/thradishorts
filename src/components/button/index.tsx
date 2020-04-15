import React from 'react';
import {Container,Text} from './style'

interface Iprops {
    padding?:{left:number,top?:number};
    radius?:number;
    text?:string;
    height?:number;
}
export default function Button(props:Iprops) {
  return <Container>
      <Text style={{
        height:props.height,
        paddingLeft:props.padding?.left,
        paddingRight:props.padding?.left,
        paddingTop:props.padding?.top,
        paddingBottom:props.padding?.top,
        borderRadius:props.radius
  }}>{props.text}</Text>
   </Container> 
}