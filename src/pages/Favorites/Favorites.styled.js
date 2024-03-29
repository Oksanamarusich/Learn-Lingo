import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledSection = styled.section`
  padding: 96px 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;
export const FavoriteTitle = styled.h2`
  margin-bottom: 32px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const StyledLink = styled(Link)`
  margin-bottom: 32px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;

  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const FavoritesSpan = styled.span`
  font-style: italic;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
`;
