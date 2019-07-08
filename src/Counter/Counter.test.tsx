import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Counter from './Counter';

afterEach(cleanup);

test('can render initial count', () => {
  const { getByText } = render(<Counter />);

  expect(getByText('Count: 0')).toBeInTheDocument();
});

test('can increment the default amount', () => {
  const { getByText } = render(<Counter />);

  fireEvent.click(getByText('Increment'));

  expect(getByText('Count: 1')).toBeInTheDocument();
});

test('can increment twice', () => {
  const { getByText } = render(<Counter />);

  fireEvent.click(getByText('Increment'));
  fireEvent.click(getByText('Increment'));

  expect(getByText('Count: 2')).toBeInTheDocument();
});

test('can increment the specified amountof 5', () => {
  const { getByText } = render(<Counter amount={5} />);

  fireEvent.click(getByText('Increment'));

  expect(getByText('Count: 5')).toBeInTheDocument();
});
