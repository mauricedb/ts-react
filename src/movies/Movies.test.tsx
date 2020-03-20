import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Movies from './Movies';

jest.mock('use-abortable-fetch', () => () => ({
  loading: false,
  data: [
    {
      id: 1,
      title: 'A movie',
      image: '/img/a-movie.png',
      overview: 'The movie',
      genres: ['genre one']
    },
    {
      id: 2,
      title: 'Another movie',
      image: '/img/another-movie.png',
      overview: 'That other movie',
      genres: ['genre two', 'genre three']
    }
  ]
}));

describe('The Movies', () => {
  test('can render movies', () => {
    const { getByText } = render(<Movies />);

    expect(getByText('A movie')).toBeVisible();
    expect(getByText('The movie')).toBeVisible();
  });

  test('selects a movie when the card header is clicked', async () => {
    const { getByText, findByText } = render(<Movies />);

    fireEvent.click(getByText('A movie'));

    expect(await findByText('genre one')).toBeVisible();
  });
});
