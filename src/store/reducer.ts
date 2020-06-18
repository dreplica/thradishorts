import { stateReducer } from "./contextState";
import { actionType } from "./actiontypes";

export default function (state = stateReducer, action: actionType) {
  switch (action.type) {
    case "New link":
      const url = setLocal(action.payload);
      return {
        ...state,
        linking:url,
        error:"",
        loading:false
      };
      
    case "Error":
      return {
        ...state,
        error:action.payload,
        loading:false
      }
    case "Loading":
      return{
        ...state,
        loading:true
      }
      
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
