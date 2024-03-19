import { styled } from "styled-components";

export const UserMenuContainer = styled.ul`
display:flex;

gap:16px;

`
export const ButtonLogIn = styled.button`
width: 73px;
height: 20px;
background-color: transparent;
font-family: var(--family);
font-weight: 700;
font-size: 16px;
line-height: 1.25;
color: ${({theme})=> theme.buttonRegistration};
`
export const ContainerButton = styled.li`
display:flex;
justify-content:center;
align-items:center;

`

export const ButtonRegistration = styled.button`
border-radius: 12px;
padding: 14px 39px;
width: 166px;
height: 48px;
background-color:${({ theme }) => theme.buttonRegistration};
font-family: var(--family);
font-weight: 700;
font-size: 16px;
line-height: 1.25;
color: ${({ theme }) => theme.primaryBgColor};
`