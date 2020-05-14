import React, { useState, useEffect } from 'react';
import { FaHamburger } from 'react-icons/fa'

import {
  Container,
  Head,
  Logo,
  Nav,
  List,
  Auth
} from './style'

export default function Header() {

  const [state, setstate] = useState<"none" | "flex" | "flex">("flex")

  useEffect(() => {
    const width = window;
    width.addEventListener('resize', showNav, false);
    return () => {
      width.removeEventListener('resize', showNav, false)
    }
  }, [window.innerWidth])

  const showNav = () => (window.innerWidth >= 990) ? setstate("flex") : setstate("none")


  const toggleMenu = () => (state === "flex") ? setstate("none") : setstate("flex")

  return (<Container>
    <Head>
      <Logo>Thradishorts </Logo>
      <FaHamburger onClick={toggleMenu} className='Menu' size={30} />
      <Nav style={{ display: state }}>
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
  )
}
