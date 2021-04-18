import React, { FC } from 'react';

import { MovieType } from './MovieType';
import classes from './MovieListCard.module.css';

type MovieListCardProps = {
  movie: MovieType;
  onMovieClicked: (movie: MovieType) => void;
};

export const MovieListCard: FC<MovieListCardProps> = ({
  movie,
  onMovieClicked,
}) => {
  return (
    <div className={classes.movie} onClick={() => onMovieClicked(movie)}>
      <h4>{movie.title}</h4>
      <img src={movie.image} alt={movie.title} />
      <div>{movie.overview}</div>
    </div>
  );
};

MovieListCard.displayName = 'MovieListCard';
