import { styled } from 'styled-components';

export const SectionHero = styled.section`
  padding: 0 64px;
  margin-bottom: 24px;
  display: flex;
  gap: 24px;
`;

export const ContainerTitle = styled.div`
  padding: 98px 108px 64px;
  border-radius: 30px;
  width: 720px;
  height: 530px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;
export const TitleContainer = styled.div`
  margin-bottom: 32px;
  width: 548px;
  height: 112px;
`;

export const Title = styled.h1`
  font-family: var(--family);
  font-weight: 500;
  font-size: 48px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
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
  width: 471px;
  height: 66px;
`;
export const ButtonHero = styled.button`
  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
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
`;
