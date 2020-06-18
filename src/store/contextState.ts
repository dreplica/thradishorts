export type contextState = {
  state: stateContext;
  dispatch(arg: any):void;
};

export type stateContext = {
  linking:string[];
  error:string;
  loading:boolean;
}

export const stateReducer: stateContext = {
  linking: [],
  error: "",
  loading:false
}


export const initialContext: contextState = {
  state: stateReducer,
  dispatch: () => {},
};
