import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const AdditionalInfoWrapper = styled.div`
  margin-bottom: 20px;
`;

export const AdditionaInfo = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  font-size: 20px;
  &:hover {
    color: gray;
  }
`;
