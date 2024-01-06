import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const MoviesStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

export const MovieListCard = styled.li`
  width: calc((100% - 100px) / 6);
`;

export const NavLink = styled(Link)`
  & :hover {
    color: gray;
  }
`;

export const Title = styled.p`
  margin-top: 15px;
  font-size: 25px;
`;
