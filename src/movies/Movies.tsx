import React, { useState } from 'react';
import useFetch from 'use-abortable-fetch';

import MovieType from './MovieType';
import Loading from './Loading';
import MoviesList from './MoviesList';

const Movies = () => {
  const { loading, data, error } = useFetch<MovieType[]>('/movies.json');
  const [selected, setSelected] = useState<MovieType | null>(null);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  if (!data || typeof data === 'string') {
    return null;
  }

  return (
    <MoviesList movies={data} selected={selected} setSelected={setSelected} />
  );
};

Movies.displayName = 'Movies';

export default Movies;
