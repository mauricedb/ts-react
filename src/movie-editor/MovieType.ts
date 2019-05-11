export type Rating = {
  criticsScore: number;
  audienceScore: number;
};

export type CastType = {
  id: number;
  name: string;
  characters: string[];
};

export type Posters = {
  thumbnail: string;
  profile: string;
  detailed: string;
  original: string;
};

export type Movie = {
  id: number;
  title: string;
  year: number;
  mpaaRating: string;
  ratings: Rating;
  criticsConsensus: string;
  synopsis: string;
  genres: string[];
  posters: Posters;
  abridgedCast: CastType[];
  abridgedDirectors: string[];
};
