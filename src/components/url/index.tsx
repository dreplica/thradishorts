import React from 'react';

import Button from '../button';
import {Container} from './style'

export default function Urlpath() {
  return (
    <Container
    style={{
        backgroundImage:'/assets/br-shorten-desktop.svg'
    }}
    >
        <form>
            <label> 
                <input 
                type='text' 
                placeholder='Shorten a link here...'
                />
            </label>
            <Button 
            padding={{left:20,top:10}}
            radius={10}
            text='Shorten it!'
            />
        </form>
    </Container>
  );
}
