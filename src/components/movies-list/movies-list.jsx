import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {movies.map(({ poster_path, original_title, id }) => {
        return (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>
              <img src={`${baseImgUrl}${poster_path}`} alt={original_title} />
              <p>{original_title}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
