import { FaHeart } from 'react-icons/fa6';
import { IconHeart } from 'components/icons/IconHeart';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from '../../redux/favorites/favoritesSlice';
import { useState } from 'react';
import { HeartButton } from './ButtonHeart.styled';
import { selectFavorites } from '../../redux/favorites/selectors';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-hot-toast';

export const ButtonHeart = ({ teacher }) => {
  const { token } = useAuth();
  const [toggleHeart, setToggleHeart] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorites = favorites.some(
    favorite => favorite.avatar_url === teacher.avatar_url
  );

  const handleFavoritesToggle = () => {
    if (!token) {
      toast.error(
        'Please register or log in to add the teacher to your favorites'
      );
    } else {
      setToggleHeart(!toggleHeart);

      dispatch(addFavorites(teacher));
    }
  };

  return (
    <HeartButton onClick={handleFavoritesToggle}>
      {isFavorites ? <FaHeart color="#F4C550" size="24px" /> : <IconHeart />}
    </HeartButton>
  );
};
