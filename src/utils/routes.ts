import Router from "next/router";

// Centralized route paths
export const ROUTES = {
  HOME: "/",
  MOVIE_DETAILS: (id: string) => `/movie/details/${id}`,
};

// Redirect function
export const redirectTo = (path: string) => {
  Router.push(path);
};
