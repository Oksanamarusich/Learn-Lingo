import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerNavigation = styled.div`
padding:10px 0;
margin-right: auto;
display:flex;
justify-content: space-between;
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
color: ${({theme})=>theme.default.secondaryTxtColor};
`

export const NavigationList = styled.ul`
display:flex;
gap:28px;
width: 138px;
`

export const StyledNavLink = styled(NavLink)`
font-family: var(--family);
font-weight: 400;
font-size: 16px;
line-height: 1.25;
color:${({theme})=>theme.default.secondaryTxtColor};
`

