import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerNavigation = styled.div`
padding:10px 0;
margin-right: 268px;;
display:flex;
gap:390px;

width:661px;
`
export const ContainerLogo = styled.div`
padding: 2px 0;
display:flex;
justify-content: center;
gap:8px;
width: 133px;
`

export const StyledLink = styled(Link)`
font-family: var(--family);
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: -0.02em;
color: ${({theme})=>theme.colors.secondaryTxtColor};
`

export const NavigationList = styled.ul`
padding:4px 0;
display:flex;
justify-content:center;
gap:28px;
width: 138px;
`

export const StyledNavLink = styled(NavLink)`
font-family: var(--family);
font-weight: 400;
font-size: 16px;
line-height: 1.25;
color:${({ theme }) => theme.colors.secondaryTxtColor};
 &.active {
    color: ${({theme}) => theme.colors.buttonBgColor};
    text-decoration: underline;
`

