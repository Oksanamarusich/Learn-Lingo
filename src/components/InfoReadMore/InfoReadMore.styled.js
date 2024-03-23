import { styled } from "styled-components";

export const Description = styled.p`
margin-bottom:32px;
font-family: var(--family);
font-weight: 400;
font-size: 16px;
line-height: 1.5;
color:${({ theme }) => theme.colors.primaryTxtColor} ;
`


