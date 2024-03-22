import { styled } from "styled-components";

export const BlockLanguage = styled.div`
/* margin-left:165px; */
display:flex;
gap:8px;
`
export const BlockLevelActive = styled.div`
border-radius: 35px;
padding: 8px 12px;

background-color: ${({theme})=> theme.colors.buttonBgColor};
`
export const BlockLevel = styled.div`
border: 1px solid rgba(18, 20, 23, 0.2);
border-radius: 35px;
padding: 8px 12px;

`

export const TextLevel = styled.p`
font-family: var(--family);
font-weight: 500;
font-size: 14px;
line-height: 1.14286;
color:${({theme})=>theme.colors.primaryTxtColor} ;
`