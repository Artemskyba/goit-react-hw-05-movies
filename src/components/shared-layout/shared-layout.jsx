import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/movies'}>Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
