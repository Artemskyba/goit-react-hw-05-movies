import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const defaultImg =
    'https://shop.stryi-tur.info/wp-content/uploads/2022/11/161.jpg';
  return (
    <ul>
      {movies.map(({ poster_path, original_title, id }) => {
        return (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>
              <img
                src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                alt={original_title}
              />
              <p>{original_title}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
