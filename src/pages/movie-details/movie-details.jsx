import { fetchById } from 'api';
import { MovieCard } from 'components/movie-card/movie-card';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  AdditionaInfo,
  AdditionalInfoWrapper,
  NavLink,
} from './movie-details.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setIsLoading(true);
        const response = await fetchById(movieId);
        setMovieInfo(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);
  return isLoading ? (
    <div>LOADING</div>
  ) : error ? (
    <div>
      <b>:{'\u0028'}</b>Something went wrong{' '}
    </div>
  ) : (
    <div>
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
      <AdditionalInfoWrapper>
        <AdditionaInfo>
          <b>Additional information</b>
        </AdditionaInfo>
        <NavLink to={'cast'}>Cast</NavLink>
        <NavLink to={'reviews'}>Rewiews</NavLink>
      </AdditionalInfoWrapper>
      <Outlet />
    </div>
  );
}
