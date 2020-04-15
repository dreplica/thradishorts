import React from 'react';

import {Container} from './style'
export default function SocialLinks() {
  return (
      <Container>
          {
              Links.map((items, ind) => <a href='/' key={ind}><img
                  
                  src={items.img}
                  alt={items.name}/>
                  </a>)
          }
    </Container>
  );
}


const Links = [
    {
        img: './assets/icon-facebook.svg',
        name: 'Facebook',
        link:'facebook.com/dreplica'
    },
    {
        img: './assets/icon-twitter.svg',
        name: 'Twitter',
        link:'twitter.com/dreplica'
    },
    {
        img: './assets/icon-pinterest.svg',
        name: 'Pinterest',
        link:'pinterest.com'
    },
    {
        img: './assets/icon-instagram.svg',
        name: 'Instagram',
        link:'instagram.com/dreplica'
    },
]