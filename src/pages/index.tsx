import { useEffect, useState } from "react";
import { redirectTo, ROUTES } from "@/utils/routes";
import { fetchMovieDataBySearch } from "./api/moviesApi";
import Image from "next/image";

const SEARCH_VALUE = "batman";
interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const moviesPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetchMovieDataBySearch(SEARCH_VALUE)
      .then((data) => {
        if (data) {
          setMovies(data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Mini Netflix</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentMovies.map((movie) => (
              <div
                key={movie.imdbID}
                onClick={() => redirectTo(ROUTES.MOVIE_DETAILS(movie.imdbID))}
              >
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={288}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="mt-2 text-center">{movie.Title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Anterior
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => paginate(idx + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === idx + 1
                    ? "bg-blue-700 font-bold"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Próximo
            </button>
          </div>
        </>
      )}
    </div>
  );
}
