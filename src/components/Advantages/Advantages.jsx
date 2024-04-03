import {
  ContainerAdvantages,
  SectionAdvantages,
  StyledItem,
  Subtitle,
} from './Advantages.styled';

export const Advantages = () => {
  return (
    <SectionAdvantages>
      <ContainerAdvantages>
        <StyledItem>
          <Subtitle>32,000 + </Subtitle>
          <p>Experienced tutors</p>
        </StyledItem>
        <StyledItem>
          <Subtitle>300,000 +</Subtitle>
          <p>5-star tutor reviews</p>
        </StyledItem>
        <StyledItem>
          <Subtitle>120 +</Subtitle>
          <p>Subjects taught</p>
        </StyledItem>
        <StyledItem>
          <Subtitle>200 +</Subtitle>
          <p>Tutor nationalities</p>
        </StyledItem>
      </ContainerAdvantages>
    </SectionAdvantages>
  );
};
