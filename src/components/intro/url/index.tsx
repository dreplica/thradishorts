import React, { useState, useContext, ChangeEvent } from "react";
import Axios from "axios";

import { ContextState } from "../../../App";
import Button from "../../button";
import { Container } from "./style";

export default function Urlpath() {
  const [state, setstate] = useState("");
  const { dispatch } = useContext(ContextState);

  const edit_state = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setstate(val);
  };

  const send_url = async (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url = await Axios.post(`https://thradishorts.herokuapp.com/shorten`, {
      url: state,
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
            value={state}
            placeholder="Shorten a link here..."
          />
        </label>
        <Button
          padding={{ left: 20, top: 10 }}
          radius={5}
          width="80%"
          text="Shorten it!"
          onClick={send_url}
        />
      </form>
    </Container>
  );
}
