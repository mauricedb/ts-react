import React, { lazy, Suspense } from 'react';

import Loading from './Loading';
import MovieType from './MovieType';
import MovieListCard from './MovieListCard';
import classes from './MoviesList.module.css';

export const SelectedMovie = lazy(() => import('./SelectedMovie'));

type MoviesListProps = {
  movies: MovieType[];
  selected: MovieType | null;
  setSelected: (movie: MovieType | null) => void;
};

const MoviesList = ({ movies, selected, setSelected }: MoviesListProps) => {
  return (
    <div className={classes.container}>
      <Suspense fallback={<Loading />}>
        <div className={classes.movies}>
          {movies.map((movie: MovieType) => (
            <MovieListCard
              key={movie.id}
              movie={movie}
              onMovieClicked={(m: MovieType) => setSelected(m)}
            />
          ))}
        </div>
        {selected && (
          <SelectedMovie
            key={selected.id}
            selected={selected}
            onMovieCleared={() => setSelected(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default MoviesList;
