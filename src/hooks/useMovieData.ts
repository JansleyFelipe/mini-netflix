import { useState, useEffect } from "react";
import { fetchMovieDataById } from "@/pages/api/moviesApi";
import { Movie } from "@/components/MovieDetails.types";

interface MovieState {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
}

export function useMovieData(movieId: string | string[]): MovieState {
  const [state, setState] = useState<MovieState>({
    movie: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!movieId) {
      setState({ movie: null, loading: false, error: "Invalid movie ID." });
      return;
    }

    async function fetchMovie() {
      try {
        const movie = await fetchMovieDataById(movieId);
        setState({ movie, loading: false, error: null });
      } catch (error) {
        setState({
          movie: null,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "An unknown error occurred.",
        });
      }
    }

    fetchMovie();
  }, [movieId]);

  return state;
}
