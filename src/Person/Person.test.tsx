import React from 'react';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Person from './Person';

afterEach(cleanup);

test('can render initial person', () => {
  const { getByText } = render(<Person />);

  expect(getByText('Hello Maurice de Beijer')).toBeInTheDocument();
});

test('can render initial person', () => {
  const { getByText, getByDisplayValue } = render(<Person />);

  fireEvent.change(getByDisplayValue('Maurice'), { target: { value: 'Jack' } });
  fireEvent.change(getByDisplayValue('de Beijer'), {
    target: { value: 'Murphy' }
  });

  expect(getByText('Hello Jack Murphy')).toBeInTheDocument();
});
