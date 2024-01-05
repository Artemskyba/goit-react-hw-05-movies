import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared-layout/shared-layout';
import MovieDetails from 'pages/movie-details/movie-details';
import Home from 'pages/home/home';
import Movies from 'pages/movies/movies';
import Cast from './cast/cast';
import Reviews from './reviews/rewiews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
