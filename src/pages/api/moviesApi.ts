const API_URL = process.env.NEXT_PUBLIC_OMDB_URL;
const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const fetchMovieDataById = async (id: string | string[]) => {
  try {
    const response = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch movie data. Status: ${response.status}`);
    }

    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error(
        `Failed to parse response as JSON. The response might be invalid.`
      );
    }

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found.");
    }

    return data;
  } catch {
    throw new Error(
      `Unable to fetch movie data. Please check the ID and try again.`
    );
  }
};

export const fetchMovieDataBySearch = async (search: string) => {
  const response = await fetch(
    `${API_URL}/?apikey=${API_KEY}&s=${search}&type=movie`
  );
  const data = await response.json();
  console.log("nao existe: ", data.Search, "\n");
  if (!data.Search) {
    throw new Error(data.Error || "Failed to fetch movie data by search");
  }

  return data.Search;
};
