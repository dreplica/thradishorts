import React from 'react';
import {
    Container,
    Head,
    Logo,
    Nav,
    Auth
} from './style'
import Button from '../button';

export default function Header() {
  return <Container>
        <Head>
            <Logo><img src={'/assets/logo.svg'} alt='logo'/></Logo>
            <Nav>
                <li><a href='#'> Features</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Resources</a></li>
            </Nav>
        </Head>
        <Auth>
                <li className='log'><a href='#'>Login</a></li>
                {/* <Button padding={{left:20}} radius={20} text={'get started'}/> */}
                <li className='sign'><a href='#'>Sign Up</a></li>
        </Auth>
    </Container>
}
