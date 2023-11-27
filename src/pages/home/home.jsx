import { MoviesList } from 'components/movies-list/movies-list';
import { fetchTrending } from 'api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        const response = await fetchTrending();
        setMovies(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return isLoading ? <div>LOADING</div> : <MoviesList movies={movies} />;
}
