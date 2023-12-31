import { fetchByQuery } from 'api';
import { MoviesList } from 'components/movies-list/movies-list';
import { SearchForm } from 'components/search-form/search-form';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const handleSubmit = searchQuery => {
    setParams({ query: searchQuery });
  };

  useEffect(() => {
    async function fetchMoviesByQuery() {
      try {
        if (query.trim() !== '') {
          setIsLoading(true);
          const response = await fetchByQuery(query);
          setMovies(response);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesByQuery();
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading ? (
        <div>LOADING</div>
      ) : error ? (
        <div>
          <b>:{'\u0028'}</b>Something went wrong{' '}
        </div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </>
  );
}
