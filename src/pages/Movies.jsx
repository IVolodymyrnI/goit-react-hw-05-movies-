import { MovieList } from 'modules/common/MovieList/MovieList';
import { SearchForm } from 'modules/Movies/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useFetchMovie } from 'hooks';

export default function Movies() {
  const [params] = useSearchParams();
  const { data, status } = useFetchMovie({
    url: '/search/movie',
    query: params.get('query') || '',
	});

  const movies = data?.results || [];

  return (
    <>
      <SearchForm />
      <MovieList moviesList={movies} status={status} />
    </>
  );
}
