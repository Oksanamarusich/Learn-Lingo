import { TiStarFullOutline } from 'react-icons/ti';
import { FaCircleUser } from "react-icons/fa6";
import {
  BoxUser,
  DescriptionReviews,
  ListItem,
  ListReview,
  Subtitle,
  Text,
  WrapperIconText,
} from './ReviewsStudents.styled';

export const ReviewsStudents = ({ data }) => {
  const { comment, reviewer_name, reviewer_rating } = data;

  return (
    <>
      <ListReview>
        <ListItem>
          <BoxUser>
            <FaCircleUser size="44px"fill = "#8a8a89"/>
            <div>
              <Subtitle>{reviewer_name}</Subtitle>
              <WrapperIconText>
                <TiStarFullOutline fill=" #ffc531" />
                <Text>{reviewer_rating}</Text>
              </WrapperIconText>
            </div>
          </BoxUser>

          <DescriptionReviews>{comment}</DescriptionReviews>
        </ListItem>
      </ListReview>
    </>
  );
};
