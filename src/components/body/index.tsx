import React from 'react';

import Article from './Article/index';
import {
    Container,
    Cardbox,
    CardContent,
    Line
} from './style'
import Card from './cards';
export default function Content() {
 
  return (
    <Container>
        <Article />
      <Cardbox>
          <Line />
        <CardContent>
          
          {
            data.map((item, ind) => <Card
              key={ind}
              margin={ind*80} 
              title={item.title}
              description={item.description}
              image={item.image}
    
            />)
          }
        </CardContent>

        </Cardbox>
    </Container>
  );
}
const data = [
  {
    title:'Brand Recoginition',
    image:'./assets/icon-brand-recognition.svg',
    description:'boost your brand recognition with each lick. generic links sond t mean a thinf branded links helo create confidence inn your content'
  },
  {
    title: 'Brand Recoginition',
    image: './assets/icon-detailed-records.svg',
    description: 'boost your brand recognition with each lick. generic links sond t mean a thinf branded links helo create confidence inn your content'
  },
  {
    title: 'Brand Recoginition',
    image: './assets/icon-fully-customizable.svg',
    description: 'boost your brand recognition with each lick. generic links sond t mean a thinf branded links helo create confidence inn your content'
  }
]