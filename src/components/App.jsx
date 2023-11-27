import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared-layout/shared-layout';
import MovieDetails from 'pages/movie-details/movie-details';
import Home from 'pages/home/home';
import Movies from 'pages/movies/movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="details" element={<div>Details</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
