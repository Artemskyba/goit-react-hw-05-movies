import { Outlet } from 'react-router-dom';
import {
  Header,
  LayoutWrapper,
  NavLink,
  Navigation,
} from './shared-layout.styled';

export default function SharedLayout() {
  return (
    <LayoutWrapper>
      <Header>
        <Navigation>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/movies'}>Movies</NavLink>
        </Navigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
}
