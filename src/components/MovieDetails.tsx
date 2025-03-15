import { ArrowLeft } from "lucide-react";
import { redirectTo } from "@/utils/routes";
import Image from "next/image";
import { MovieDetailsProps } from "./MovieDetails.types";

export default function MovieDetails({ movie }: MovieDetailsProps) {
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Movie Not Found</h1>
        <button
          onClick={() => redirectTo("/")}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <button
        onClick={() => redirectTo("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-white text-lg hover:opacity-75 transition"
      >
        <ArrowLeft size={24} />
        Back
      </button>
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={288}
        height={400}
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4">
        {movie.Title} ({movie.Year})
      </h1>
      <p className="mt-4 max-w-md text-center">{movie.Plot}</p>
      <p className="mt-2 font-semibold">IMDb Rating: {movie.imdbRating}</p>
    </div>
  );
}
