export type contextState = {
  state: string[];
  dispatch: (arg: any) => void;
};

export type stateContext = string[];

export const initialContext: contextState = {
  state: [],
  dispatch: () => {},
};

export const stateContext: stateContext = [];
