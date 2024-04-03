import { ListTeachers } from 'components/ListTeachers/ListTeachers';
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
    <main>
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
    </main>
  );
}
