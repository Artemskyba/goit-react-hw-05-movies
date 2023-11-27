import { NavLink } from 'react-router-dom';

export const MovieCard = ({ movieInfo }) => {
  const {
    original_title,
    release_date,
    genres,
    poster_path,
    vote_average,
    overview,
  } = movieInfo;
  const baseImgUrl = 'https://image.tmdb.org/t/p/w300';
  const defaultImg =
    'https://shop.stryi-tur.info/wp-content/uploads/2022/11/161.jpg';
  const year = release_date.split('-')[0];
  return (
    <>
      <button>GO BACK</button>
      <div>
        <img
          src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
          alt={original_title}
        ></img>
        <div>
          <h1>
            {original_title} ({year})
          </h1>
          <p>
            <b>User Score: </b>
            {Math.ceil(vote_average * 10)}%
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres.map(({ id, name }) => {
              return <span key={id}>{name}</span>;
            })}
          </p>
        </div>
      </div>
    </>
  );
};
