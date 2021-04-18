import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieEditor from './MovieEditor';
import { Movie } from './MovieType';
import { MovieBuilder, RatingsBuilder } from './MovieBuilder';

describe('The MovieEditor', () => {
  function renderMovieEditor(movie?: Movie) {
    return render(<MovieEditor movie={movie} />);
  }

  test('can render', () => {
    const { getByText, getByLabelText } = renderMovieEditor();

    expect(getByText('Movie editor')).toBeVisible();
    expect(getByLabelText('Title:')).toBeVisible();
    expect(getByLabelText('Title:')).toHaveValue('127 Hours');
  });

  test('can render random movie', () => {
    const movie = new MovieBuilder().build();

    const { getByText, getByLabelText } = renderMovieEditor(movie);

    expect(getByText('Movie editor')).toBeVisible();
    expect(getByLabelText('Title:')).toBeVisible();
    expect(getByLabelText('Title:')).toHaveValue(movie.title);
  });

  test('can render with title', () => {
    const movie = new MovieBuilder()
      .withTitle('The Shawshank Redemption')
      .build();

    const { getByText, getByLabelText } = renderMovieEditor(movie);

    expect(getByText('Movie editor')).toBeVisible();
    expect(getByLabelText('Title:')).toBeVisible();
    expect(getByLabelText('Title:')).toHaveValue('The Shawshank Redemption');
  });

  test('can render with ratings', () => {
    const movie = new MovieBuilder()
      .withRatings(
        new RatingsBuilder().withCriticsScore(82).withAudienceScore(81).build()
      )
      .build();

    const { getByText, getByLabelText } = renderMovieEditor(movie);

    expect(getByText('Movie editor')).toBeVisible();
    expect(getByLabelText('Critics score:')).toBeVisible();
    expect(getByLabelText('Critics score:')).toHaveValue('82'); // type=text
    expect(getByLabelText('Audience score:')).toBeVisible();
    expect(getByLabelText('Audience score:')).toHaveValue(81); // type=number
  });
});
