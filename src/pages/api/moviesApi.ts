export const fetchMovieDataById = async (id: string | string[]) => {
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Failed to fetch movie data");
  }

  return data;
};

export const fetchMovieDataBySearch = async (search: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`
  );
  const data = await response.json();
  console.log("nao existe: ", data.Search, "\n");
  if (!data.Search) {
    throw new Error(data.Error || "Failed to fetch movie data by search");
  }

  return data.Search;
};
