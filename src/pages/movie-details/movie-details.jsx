import { Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <>
      <div>Details</div>
      <Outlet />
    </>
  );
}