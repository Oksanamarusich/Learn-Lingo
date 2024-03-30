import { Field, Form } from "formik";
import { styled } from "styled-components";

export const FiltersSection = styled.section`
padding: 64px 128px 32px;
width:683px;

`;

export const StyledForm = styled(Form)`
display:flex;
gap:20px;
`
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

export const StyledFieldLanguages = styled(Field)`
border-radius: 14px;
padding:14px 13px 14px 18px;
width: 221px;
height: 48px;
outline:transparent;
border:transparent;
background: ${({ theme }) => theme.colors.primaryBgColor};
font-family: var(--family);
font-weight: 500;
font-size: 18px;
line-height: 1.11111;
color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

// export const StyledOption = styled.option`
// border-radius: 14px;
// color:green;

// `;

export const StyledFieldLevel = styled(Field)`
border-radius: 14px;
padding:14px 13px 14px 18px;
width: 198px;
height: 48px;
outline:transparent;
border:transparent;
background: ${({ theme }) => theme.colors.primaryBgColor};
font-family: var(--family);
font-weight: 500;
font-size: 18px;
line-height: 1.11111;
color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const StyledFieldPrise = styled(Field)`
border-radius: 14px;
padding:14px 13px 14px 18px;
width: 124px;
height: 48px;
outline:transparent;
border:transparent;
background: ${({ theme }) => theme.colors.primaryBgColor};
font-family: var(--family);
font-weight: 500;
font-size: 18px;
line-height: 1.11111;
color: ${({ theme }) => theme.colors.primaryTxtColor};
`;



