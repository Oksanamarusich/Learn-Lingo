import { styled } from "styled-components";

export const Description = styled.p`
margin-bottom:32px;
font-family: var(--family);
font-weight: 400;
font-size: 16px;
line-height: 1.5;
color:${({ theme }) => theme.colors.primaryTxtColor} ;
`

export const ButtonBookTrial = styled.button`
margin-top:32px;
border-radius: 12px;
padding: 16px 48px;
width: 232px;
height: 60px;
background-color: ${({ theme }) => theme.colors.buttonBgColor};
font-family: var(--family);
font-weight: 700;
font-size: 18px;
line-height: 1.55556;
color:${({ theme }) => theme.colors.primaryTxtColor};
white-space:nowrap;
`
export const WrapperDescription = styled.div`
margin-left: 168px;
`