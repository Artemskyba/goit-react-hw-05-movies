import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  GoBackButton,
  MovieCardWrapper,
  MovieImage,
  MovieInfoText,
  MovieInfoTitles,
  Movietitle,
} from './movie-card.styled';

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
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <>
      <Link to={backLink.current}>
        <GoBackButton>GO BACK</GoBackButton>
      </Link>
      <MovieCardWrapper>
        <MovieImage
          src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
          alt={original_title}
        ></MovieImage>
        <div>
          <Movietitle>
            {original_title} ({year})
          </Movietitle>
          <MovieInfoText>
            <b>User Score: </b>
            {Math.ceil(vote_average * 10)}%
          </MovieInfoText>
          <MovieInfoTitles>Overview</MovieInfoTitles>
          <MovieInfoText>{overview}</MovieInfoText>
          <MovieInfoTitles>Genres</MovieInfoTitles>
          <MovieInfoText>
            {genres.map(({ id, name }) => {
              return <span key={id}>{name}</span>;
            })}
          </MovieInfoText>
        </div>
      </MovieCardWrapper>
    </>
  );
};
