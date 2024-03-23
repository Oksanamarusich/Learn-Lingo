import { InfoAboutTeacher } from 'components/InfoAboutTeacher/InfoAboutTeacher';
import { InfoReadMore } from 'components/InfoReadMore/InfoReadMore';

import { LanguageLevel } from 'components/LanguageLevel/LanguageLevel';
import { useState } from 'react';

import {
  ButtonBookTrial,
  ButtonMoreInfo,
  CardWrapper,
  WrapperLanguageLevel,
} from './TeacherCard.styled';

export const TeacherCard = ({ index, teacher }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <CardWrapper key={index}>
      <InfoAboutTeacher teacher={teacher} />
      <WrapperLanguageLevel>
        {isReadMore ? (
          <InfoReadMore teacher={teacher} />
        ) : (
          <ButtonMoreInfo onClick={() => setIsReadMore(true)}>
            Read more
          </ButtonMoreInfo>
        )}

        <LanguageLevel level={teacher} />
        {isReadMore && (
          <ButtonBookTrial type="button">Book trial lesson</ButtonBookTrial>
        )}
      </WrapperLanguageLevel>
    </CardWrapper>
  );
};
