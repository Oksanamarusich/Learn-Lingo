import { ButtonHero, ContainerDescription, ContainerTitle, DescriptionHero, SectionHero, Title, TitleContainer, TitleSpan } from "./Hero.styled"
import image  from '../../assets/img/image.jpg'

export const Hero = () => {
    return (
        <SectionHero>
            <ContainerTitle>
                <TitleContainer><Title>
            Unlock your potential with  the best <TitleSpan>language</TitleSpan> tutors
          </Title></TitleContainer>
                <ContainerDescription>
                    <DescriptionHero>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </DescriptionHero>
          </ContainerDescription>
          
          <ButtonHero type="button">Get started</ButtonHero>
        </ContainerTitle>
        <img src={image} alt="image" />
      </SectionHero>
    
    )
    
    
       
    
}