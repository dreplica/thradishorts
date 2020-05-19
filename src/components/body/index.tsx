import React from 'react';

import Article from './Article/index';
import Card from './cards';
import data from '../../util/cards.json'
import {
    Container,
    Cardbox,
    CardContent,
    Line
} from './style'

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