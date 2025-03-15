import { useRouter } from "next/router";
import MovieDetails from "@/components/MovieDetails";
import StateHandler from "@/components/StateHandler";
import { useMovieData } from "@/hooks/useMovieData";

export default function MovieDetailsQueryPage() {
  const router = useRouter();
  const movieId = router.query.movieId as string;
  const { movie, loading, error } = useMovieData(movieId);

  return (
    <StateHandler loading={loading} error={error}>
      {movie && <MovieDetails movie={movie} />}
    </StateHandler>
  );
}
