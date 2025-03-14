import { GetServerSideProps } from "next";
import { fetchMovieDataById } from "../../api/moviesApi";
import MovieDetails from "@/components/MovieDetails";
import { MovieDetailsProps } from "@/components/MovieDetails.types";

export default function MovieDetailsPage({ movie }: MovieDetailsProps) {
  return <MovieDetails movie={movie} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const movie = await fetchMovieDataById(params?.id as string);
    return { props: { movie } };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
