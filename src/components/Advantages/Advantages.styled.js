import { styled } from 'styled-components';

export const SectionAdvantages = styled.section`
  padding: 0 64px;
  margin-bottom: 32px;
`;

export const ContainerAdvantages = styled.ul`
  padding: 40px 123px;
  display: flex;
  gap: 100px;
  border: 1.5px dashed ${({ theme }) => theme.colors.border};

  border-radius: 30px;
  width: 1312px;
  height: 116px;
`;

export const StyledItem = styled.li`
  display: flex;
  gap: 16px;
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
`;
