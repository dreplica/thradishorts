import React, { useState, useContext, ChangeEvent, useEffect } from "react";
import Axios from "axios";

import { ContextState } from "../../../App";
import Button from "../../button";
import { Container } from "./style";

export default function Urlpath() {
  const [state, setstate] = useState({ val: "", width: "80%" });
  const { dispatch } = useContext(ContextState);

  useEffect(() => {
    resizeLenght();
    window.addEventListener("resize", resizeLenght, false);
    return () => {
      window.removeEventListener("resize", resizeLenght, false);
    };
  }, [window.innerWidth]);

  const resizeLenght = () =>
    window.innerWidth >= 950
      ? setstate({ ...state, width: "20%" })
      : setstate({ ...state, width: "80%" });

  const edit_state = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setstate({ ...state, val });
  };

  const send_url = async (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url = await Axios.post(`https://thradishorts.herokuapp.com/shorten`, {
      url: state.val,
    });
    if (!url.data.error) {
      dispatch({ type: "New link", payload: url.data.url });
    }
  };

  return (
    <Container>
      <form>
        <label>
          <input
            type="text"
            onChange={edit_state}
            value={state.val}
            placeholder="Shorten a link here..."
          />
        </label>
        <Button
          padding={{ left: 20, top: 10 }}
          radius={5}
          width={state.width}
          text="Shorten it!"
          onClick={send_url}
        />
      </form>
    </Container>
  );
}
