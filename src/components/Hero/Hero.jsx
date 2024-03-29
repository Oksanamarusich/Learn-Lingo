import {
  ButtonHero,
  ContainerDescription,
  ContainerTitle,
  DescriptionHero,
  SectionHero,
  Title,
  TitleContainer,
  TitleSpan,
} from './Hero.styled';
import defaultPicture from '../../assets/img/image.jpg';
import { Link } from 'react-router-dom';

export const Hero = ({ theme, picture }) => {
  return (
    <SectionHero style={theme}>
      <ContainerTitle>
        <TitleContainer>
          <Title>
            Unlock your potential with <br /> the best{' '}
            <TitleSpan>language</TitleSpan> tutors
          </Title>
        </TitleContainer>
        <ContainerDescription>
          <DescriptionHero>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </DescriptionHero>
        </ContainerDescription>
        <Link to={'/teachers'}>
          <ButtonHero type="button">Get started</ButtonHero>
        </Link>
      </ContainerTitle>
      <img
        src={picture || defaultPicture}
        alt="girl with laptop"
        width="568px"
      />
    </SectionHero>
  );
};
