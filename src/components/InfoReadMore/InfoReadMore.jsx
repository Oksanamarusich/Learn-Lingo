import { InfoAboutTeacher } from 'components/InfoAboutTeacher/InfoAboutTeacher';
import { LanguageLevel } from 'components/LanguageLevel/LanguageLevel';
import { Reviews } from 'components/Reviews/Reviews';
import { CardWrapper } from 'components/TeacherCard/TeacherCard.styled';
import {
  ButtonBookTrial,
  Description,
  WrapperDescription,
} from './InfoReadMore.styled';

export const InfoReadMore = () => {
  return (
    <CardWrapper>
      <InfoAboutTeacher />
      <WrapperDescription>
        <Description>
          Jane is an experienced and dedicated language teacher specializing in
          German and French. She holds a Bachelor's degree in German Studies and
          a Master's degree in French Literature. Her passion for languages and
          teaching has driven her to become a highly proficient and
          knowledgeable instructor. With over 10 years of teaching experience,
          Jane has helped numerous students of various backgrounds and
          proficiency levels achieve their language learning goals. She is
          skilled at adapting her teaching methods to suit the needs and
          learning styles of her students, ensuring that they feel supported and
          motivated throughout their language journey.
        </Description>
        <Reviews />
        <LanguageLevel />
        <ButtonBookTrial type="button">Book trial lesson</ButtonBookTrial>
      </WrapperDescription>
    </CardWrapper>
  );
};
