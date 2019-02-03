import React, { SFC } from 'react';

import MovieType from './MovieType';
import classes from './MovieListCard.module.css';


type MovieListCardProps = {
  movie: MovieType;
  onMovieClicked: (movie: MovieType) => void;
};

const MovieListCard: SFC<MovieListCardProps> = ({ movie, onMovieClicked }) => {
  return (
    <div className={classes.movie} onClick={() => onMovieClicked(movie)}>
      <h4>{movie.title}</h4>
      <img src={movie.image} alt={movie.title} />
      <div>{movie.overview}</div>
    </div>
  );
};

export default MovieListCard;