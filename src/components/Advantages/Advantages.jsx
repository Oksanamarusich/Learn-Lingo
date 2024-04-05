import {
  ContainerAdvantages,
  SectionAdvantages,
  StyledItem,
  Subtitle,
  Text,
} from './Advantages.styled';

export const Advantages = () => {
  return (
    <SectionAdvantages>
      <ContainerAdvantages>
        <StyledItem>
          <Subtitle>32,000 + </Subtitle>
          <Text>Experienced tutors</Text>
        </StyledItem>
        <StyledItem>
          <Subtitle>300,000 +</Subtitle>
          <Text>5-star tutor reviews</Text>
        </StyledItem>
        <StyledItem>
          <Subtitle>120 +</Subtitle>
          <Text>Subjects taught</Text>
        </StyledItem>
        <StyledItem>
          <Subtitle>200 +</Subtitle>
          <Text>Tutor nationalities</Text>
        </StyledItem>
      </ContainerAdvantages>
    </SectionAdvantages>
  );
};
