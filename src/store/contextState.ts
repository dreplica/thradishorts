import { stateContext } from "../util/contextState";
import { actionType } from "./actiontypes";

export default function (state = stateContext, action: actionType) {
  switch (action.type) {
    case "New link":
      state = setLocal(action.payload);
      return state;
    default:
      return state;
  }
}

//mutate or sets local storage and
//returns just 3 values of current links

const setLocal = (arg: string) => {
  if (!localStorage["links"]) {
    localStorage["links"] = JSON.stringify([arg]);
    return [arg]
  }

  const storage: string[] = JSON.parse(localStorage["links"]);
  
  if(storage.includes(arg)){
    return storage 
  }
  storage.unshift(arg);
  
  const neededLinks = storage.slice(0, 3);
  
  localStorage["links"] = JSON.stringify(neededLinks);

  return neededLinks
};
