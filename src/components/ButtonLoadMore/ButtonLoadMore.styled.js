import { styled } from "styled-components";

export const LoadMoreButton = styled.button`
border-radius: 12px;
padding: 16px 48px;
width: 183px;
height: 60px;
background-color:${({ theme }) => theme.colors.buttonBgColor};
font-family: var(--family);
font-weight: 700;
font-size: 18px;
line-height: 1.55556;
color:${({ theme }) => theme.colors.primaryTxtColor};
white-space:nowrap;
`;