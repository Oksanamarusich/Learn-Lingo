import { ListTeachers } from 'components/ListTeachers/ListTeachers';
import { StyledMain } from 'pages/Teachers/Teachers.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import {
  FavoritesSpan,
  FavoriteTitle,
  StyledLink,
  StyledSection,
} from './Favorites.styled';

export default function Favorites() {
  const dataFavorites = useSelector(selectFavorites);

  return (
    <StyledMain>
      <StyledSection>
        {!dataFavorites.length ? (
          <FavoriteTitle>
            Add your favorite{' '}
            <StyledLink to="/teachers">
              <FavoritesSpan>teachers</FavoritesSpan>
            </StyledLink>
          </FavoriteTitle>
        ) : (
          <ListTeachers data={dataFavorites} />
        )}
      </StyledSection>
    </StyledMain>
  );
}
