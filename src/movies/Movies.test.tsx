import React from 'react';
import 'jest-dom/extend-expect';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';

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
  afterEach(cleanup);

  test('can render movies', () => {
    const { getByText } = render(<Movies />);

    expect(getByText('A movie')).toBeInTheDocument();
    expect(getByText('The movie')).toBeInTheDocument();
  });

  test('selects a movie when the card header is clicked', async () => {
    const { getByText } = render(<Movies />);

    fireEvent.click(getByText('A movie'));

    await waitForElement(() => getByText('genre one'));
  });
});
