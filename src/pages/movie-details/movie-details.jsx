import { fetchById } from 'api';
import { MovieCard } from 'components/movie-card/movie-card';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setIsLoading(true);
        const response = await fetchById(movieId);
        setMovieInfo(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <>
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
      <div>
        <p>Additional information</p>
        <NavLink to={'cast'}>Cast</NavLink>
        <NavLink to={'reviews'}>Rewiews</NavLink>
      </div>
      <Outlet />
    </>
  );
}
