import { ReviewsStudents } from 'components/ReviewsStudents/ReviewsStudents';
import { CardWrapper } from 'components/TeacherCard/TeacherCard.styled';

import { Description } from './InfoReadMore.styled';

export const InfoReadMore = ({ teacher }) => {
  const { experience, reviews } = teacher;
  
  return (
    <div>
      <Description>{experience}</Description>
      {reviews.map((item, index) => (
        <ReviewsStudents key={index} data={item} />
      ))}
    </div>
  );
};
