import React, { useRef, useState, useEffect } from "react";

import { Container, Short, Copy } from "./style";

interface Iprops {
  link: string;
}

export default function ShortedLinks(props: Iprops) {
  const [state, setstate] = useState("copy");
  useEffect(() => {
    setstate("copy");
  }, [props.link]);

  const ref = useRef<HTMLInputElement>(null);
  const copied = () => {
    ref.current?.select();
    // ref.current?.setSelectionRange(0, 9999);
    document.execCommand("copy");
    setstate("copied");
  };

  return (
    <Container>
      <Short
        type="text"
        ref={ref}
        value={`https://thradishorts.herokuapp.com/${props.link}`}
      />
      <Copy onClick={copied}>{state}</Copy>
    </Container>
  );
}
