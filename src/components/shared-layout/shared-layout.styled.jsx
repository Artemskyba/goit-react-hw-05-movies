import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  padding: 20px 300px;
`;

export const Header = styled.header`
  padding-bottom: 40px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  font-size: 30px;
  &:hover {
    color: gray;
  }
`;
