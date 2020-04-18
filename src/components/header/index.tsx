import React from 'react';
import {
    Container,
    Head,
    Logo,
    Nav,
    List,
    Auth
} from './style'
import Button from '../button';

export default function Header() {
  return <Container>
        <Head>
          <Logo><img src={'/assets/logo.svg'} alt='logo' /></Logo>
          <Nav>
            <List>
                <li><a href='/'> Features</a></li>
                <li><a href='/'>Pricing</a></li>
                <li><a href='/'>Resources</a></li>
            </List>
            <Auth>
                <li className='log'><a href='/'>Login</a></li>
                <li className='sign'><a href='/'>Sign Up</a></li>
            </Auth>
          </Nav>
        </Head> 
    </Container>
}
