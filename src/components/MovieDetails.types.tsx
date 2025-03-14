export type Movie = {
  Title: string;
  Poster: string;
  Plot: string;
  Year: string;
  imdbRating: string;
};

export type MovieDetailsProps = {
  movie: Movie;
};
