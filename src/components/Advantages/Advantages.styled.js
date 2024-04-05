import { styled } from 'styled-components';

export const SectionAdvantages = styled.section`
  margin-bottom: 32px;
`;

export const ContainerAdvantages = styled.ul`
  padding: 30px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 100%;
  border: 1.5px dashed ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  @media only screen and (min-width: 768px) {
    padding: 60px 90px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 40px 123px;
    flex-wrap:nowrap;
    gap: 100px;
  }
  /* width: 1312px;
  height: 116px; */
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items:center;
  
  }
`;

export const Subtitle = styled.h2`
  font-family: var(--family);
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  white-space: nowrap;
`;
export const Text = styled.p`
  font-family: var(--family);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.secondaryTxtColor};
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    white-space: normal;
  }
`;
