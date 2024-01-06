import styled from 'styled-components';

export const GoBackButton = styled.button`
  background-color: inherit;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: none;
  &:hover {
    color: gray;
  }
`;

export const MovieCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MovieImage = styled.img`
  width: 400px;
`;

export const Movietitle = styled.h1`
  margin-bottom: 20px;
`;

export const MovieInfoText = styled.p`
  margin-bottom: 20px;
  white-space: pre-wrap;
`;
export const MovieInfoTitles = styled.h2`
  margin-bottom: 10px;
`;
