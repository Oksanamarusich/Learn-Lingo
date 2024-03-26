import { ErrorMessage, Field } from 'formik';
import { styled } from 'styled-components';

export const ButtonForm = styled.button`
  position: absolute;
  top: 3%;
  right: 4%;
  width: 40px;
  height: 40px;
  border: transparent;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
`;

export const TitleForm = styled.h1`
  margin-bottom: 20px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;

  color: ${({ theme }) => theme.colors.secondaryTxtColor};
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledField = styled(Field)`
  outline: transparent;
  outline-offset: -1px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  &:: placeholder {
    font-family: var(--family);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.375;

    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;

export const IconStyledEye = styled.i`
  position: absolute;
  top: 28%;
  right: 5%;
`;

export const StyledFieldIcon = styled(Field)`
position:relative;
outline: transparent;
  outline-offset: -1px;
border: 1px solid ${({ theme }) => theme.colors.borderInput};
border-radius: 12px;
padding: 16px 18px;
width: 100%;
height: 54px;
&:: placeholder{
  font-family: var(--family);
font-weight: 400;
font-size: 16px;
line-height: 1.375;

color:${({ theme }) => theme.colors.primaryTxtColor};

`;
export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  top: 2px;
  right: 8px;

  font-size: 12px;
  font-style: italic;
  color: red;
`;

export const StyledButtonForm = styled.button`
margin-top: 22px;
border-radius: 12px;
padding: 16px 16px;
width: 100%;
background-color:${({ theme }) => theme.colors.buttonBgColor};
font-family: var(--family);
font-weight: 700;
font-size: 18px;
line-height: 1.55556;
color: ${({ theme }) => theme.colors.primaryTxtColor};
transition: background-color {({theme})=>theme.animation.transition};

&:hover{
  background-color:${({ theme }) => theme.colors.hover};
}
`;
