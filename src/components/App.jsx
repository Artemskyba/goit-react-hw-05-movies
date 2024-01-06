import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared-layout/shared-layout';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('../pages/home/home'));
const Movies = lazy(() => import('../pages/movies/movies'));
const MovieDetails = lazy(() => import('../pages/movie-details/movie-details'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/rewiews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
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
      </Suspense>
    </>
  );
};
