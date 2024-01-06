import styled from 'styled-components';

export const CastStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

export const CastListCard = styled.li`
  width: calc((100% - 100px) / 6);
`;

export const Title = styled.p`
  margin-top: 15px;
  font-size: 25px;
`;

export const Charecter = styled.h3`
  white-space: pre-wrap;
`;
