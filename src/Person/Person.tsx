import React, { useReducer } from 'react';

import {
  reducer,
  createChangeFirstName,
  createChangeLastName,
  initialState,
} from './reducer';

export const Person = () => {
  const [person, dispatch] = useReducer(reducer, initialState);

  return (
    <form className="text-center">
      <div>
        <label>Firstname: </label>
        <input
          type="text"
          value={person.firstName}
          onChange={(e) => dispatch(createChangeFirstName(e.target.value))}
        />
      </div>
      <div>
        <label>Lastname: </label>
        <input
          type="text"
          value={person.lastName}
          onChange={(e) => dispatch(createChangeLastName(e.target.value))}
        />
      </div>
      <div>
        Hello {person.firstName} {person.lastName}
      </div>
    </form>
  );
};

Person.displayName = 'Person';
