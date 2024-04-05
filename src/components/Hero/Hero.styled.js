import { styled } from 'styled-components';

export const SectionHero = styled.section`
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;

export const ContainerTitle = styled.div`
  padding:  40px  20px;
  border-radius: 30px;
  width: 100%;
  height:100%;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  @media only screen and (min-width: 768px) {
    padding: 98px 86px;
  };
  @media only screen and (min-width: 1440px) {
    width: 720px;
    height: 530px;
    padding: 98px 108px 98px 64px;
  };
`;
export const TitleContainer = styled.div`
  margin-bottom: 32px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 548px;
    height: 112px;
  }
`;

export const Title = styled.h1`
  font-family: var(--family);
  font-weight: 500;
  font-size: 28px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
export const TitleSpan = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
`;

export const DescriptionHero = styled.p`
  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
export const ContainerDescription = styled.div`
  margin-bottom: 64px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 471px;
    height: 66px;
  }
`;

export const HeroPicture = styled.img`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
  }
`;
export const ButtonHero = styled.button`
  border-radius: 12px;
  padding: 16px 72px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.buttonBgColor};
  font-family: var(--family);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  white-space: nowrap;
  transition: background-color ${({ theme }) => theme.animation.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

   @media only screen and (min-width: 768px) {
   width: 267px;
    padding: 16px 88px;
   };
`;
