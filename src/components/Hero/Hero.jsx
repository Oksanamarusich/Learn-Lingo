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

export const Hero = ({theme, picture }) => {
  return (
    <SectionHero style={theme}>
      <ContainerTitle>
        <TitleContainer>
          <Title >
            Unlock your potential with <br /> the best{' '}
            <TitleSpan style = {theme}>language</TitleSpan> tutors
          </Title>
        </TitleContainer>
        <ContainerDescription>
          <DescriptionHero>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </DescriptionHero>
        </ContainerDescription>

        <ButtonHero type="button">Get started</ButtonHero>
      </ContainerTitle>
      <img src={picture || defaultPicture} alt="image" width="568px" />
    </SectionHero>
  );
};
