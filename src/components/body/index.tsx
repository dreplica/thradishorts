import React, { useContext } from "react";

import { ContextState } from "../../App";
import Article from "./article/index";
import Card from "./cards";
import data from "../../util/cards.json";
import ShortedLinks from "./result";
import { Container, Cardbox, CardContent, Links, Line } from "./style";

export default function Content() {
  const { state } = useContext(ContextState);

  return (
    <Container>
      <Links>
        {state.linking.map((link, ind) => (
          <ShortedLinks key={ind} link={link} />
        ))}
      </Links>
      <Article />
      <Cardbox>
        <Line />
        <CardContent>
          {data.map((item, ind) => (
            <Card
              key={ind}
              margin={ind * 80}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </CardContent>
      </Cardbox>
    </Container>
  );
}
