import { TiStarFullOutline } from 'react-icons/ti';
import {
  AvatarUser,
  BoxUser,
  DescriptionReviews,
  ListItem,
  ListReview,
  Subtitle,
  Text,
  WrapperIconText,
} from './Reviews.styled';

export const Reviews = () => {
  return (
    <>
      <ListReview>
        <ListItem>
          <BoxUser>
            <AvatarUser alt="user photo" width="44px" />
            <div>
              <Subtitle>Name</Subtitle>
              <WrapperIconText>
                <TiStarFullOutline fill=" #ffc531" />
                <Text>4.0</Text>
              </WrapperIconText>
            </div>
          </BoxUser>

          <DescriptionReviews>
            Jane's lessons were very helpful. I made good progress.
          </DescriptionReviews>
        </ListItem>
      </ListReview>
    </>
  );
};
