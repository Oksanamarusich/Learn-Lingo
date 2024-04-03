import { Form } from 'formik';
import { styled } from 'styled-components';

export const FiltersSection = styled.section`
  padding: 64px 128px 32px;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 683px;
`;
export const StyledLabel = styled.label`
 display:flex:
flex-direction:column; 
gap:8px;

font-family: var(--family);
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
color: ${({ theme }) => theme.colors.subtitle};
`;

export const StyledSelect = styled.select`
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
`;

export const StyledOption = styled.option`
  border-radius: 14px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const ButtonSearch = styled.button`
  border-radius: 12px;
  padding: 16px 48px;

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
`;
