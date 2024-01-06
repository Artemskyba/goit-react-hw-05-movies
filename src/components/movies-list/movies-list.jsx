import { useLocation } from 'react-router-dom';
import {
  MovieListCard,
  MoviesStyledList,
  NavLink,
  Title,
} from './movie-list.styled';

export const MoviesList = ({ movies }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const defaultImg =
    'https://shop.stryi-tur.info/wp-content/uploads/2022/11/161.jpg';
  const location = useLocation();
  return (
    <MoviesStyledList>
      {movies.map(({ poster_path, original_title, id }) => {
        return (
          <MovieListCard key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                alt={original_title}
              />
              <Title>{original_title}</Title>
            </NavLink>
          </MovieListCard>
        );
      })}
    </MoviesStyledList>
  );
};
