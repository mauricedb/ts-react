import React from 'react';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Person from './Person';

afterEach(cleanup);

test('can render initial person', () => {
  const { getByText } = render(<Person />);

  expect(getByText('Hello Maurice de Beijer')).toBeInTheDocument();
});

test('can render initial person', () => {
  const { getByText, getByValue } = render(<Person />);

  fireEvent.change(getByValue('Maurice'), { target: { value: 'Jack' } });
  fireEvent.change(getByValue('de Beijer'), { target: { value: 'Murphy' } });

  expect(getByText('Hello Jack Murphy')).toBeInTheDocument();
});
