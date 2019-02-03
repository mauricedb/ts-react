const changeFirstName = 'CHANGE-FIRST-NAME';
const changeLastName = 'CHANGE-LAST-NAME';

type Action = {
  type: string;
  payload: any;
};

export type Person = typeof initialState;

export const initialState = {
  firstName: 'Maurice',
  lastName: 'de Beijer'
};

export const createChangeFirstName = (firstName: string) => ({
  type: changeFirstName,
  payload: firstName
});

export const createChangeLastName = (lastName: string) => ({
  type: changeLastName,
  payload: lastName
});

export const reducer = (state: Person, action: Action): Person => {
  switch (action.type) {
    case changeFirstName:
      return { ...state, firstName: action.payload };
    case changeLastName:
      return { ...state, lastName: action.payload };
  }

  return state;
};
