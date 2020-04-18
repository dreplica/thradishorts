import React from 'react';
import {Text} from './style'

interface Iprops {
    padding?:{left:number,top?:number};
    radius?:number;
    text?: string;
    width?: string;
    height?:number;
}
export default function Button(props:Iprops) {
  return  <Text style={{
        width:props.width,
        height:props.height,
        paddingLeft:props.padding?.left,
        paddingRight:props.padding?.left,
        paddingTop:props.padding?.top,
        paddingBottom:props.padding?.top,
        borderRadius:props.radius
  }}>{props.text}</Text>
}