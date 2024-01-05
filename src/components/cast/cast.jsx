import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastId } from '../../api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCastByMovie() {
      try {
        setIsLoading(true);
        const response = await fetchCastId(movieId);
        setCast(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchCastByMovie();
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const defaultImg =
    'https://img.freepik.com/premium-vector/cool-man-profile-photo-icon-profile-icon-male-head-face-flat-design-vector-illustration_750364-393.jpg?w=200';
  return isLoading ? (
    <div>LOADING</div>
  ) : (
    <ul>
      {cast.map(({ character, id, name, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={profile_path ? `${baseImgUrl}${profile_path}` : defaultImg}
              alt="original_name"
            />
            <h3>{character}</h3>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
