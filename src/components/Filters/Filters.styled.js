import { Form } from 'formik';
import { styled } from 'styled-components';

export const FiltersSection = styled.section`
  padding: 10px 20px;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    padding: 64px 128px 32px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: var(--family);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const StyledSelect = styled.select`
  width: 300px;
  border-radius: 14px;
  padding: 14px 13px 14px 18px;
  height: 48px;
  outline: transparent;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.primaryBgColor};
  font-family: var(--family);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`;

export const StyledOption = styled.option`
  width: 300px;
  border-radius: 14px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`;

export const ButtonSearch = styled.button`
  border-radius: 12px;
  padding: 16px 48px;
  width: 300px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.buttonBgColor};
  font-family: var(--family);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  white-space: nowrap;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`;
