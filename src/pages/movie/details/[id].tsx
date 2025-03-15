import { GetServerSideProps } from "next";
import MovieDetails from "@/components/MovieDetails";
import StateHandler from "@/components/StateHandler";
import { useMovieData } from "@/hooks/useMovieData";

export default function MovieDetailsPage({
  initialMovieId,
}: {
  initialMovieId: string;
}) {
  const { movie, loading, error } = useMovieData(initialMovieId);

  return (
    <StateHandler loading={loading} error={error}>
      {movie && <MovieDetails movie={movie} />}
    </StateHandler>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const initialMovieId = params?.id as string;
  return { props: { initialMovieId } };
};
