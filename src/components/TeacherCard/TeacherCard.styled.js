import { styled } from 'styled-components';

export const CardWrapper = styled.li`
  border-radius: 24px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.primaryBgColor};
  width: 300px;
     @media only screen and (min-width: 1440px) {
    width:auto;
   }
`;

export const ButtonMoreInfo = styled.button`
  margin-bottom: 32px;
  background-color: transparent;
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  white-space:nowrap;
`;

export const WrapperLanguageLevel = styled.div`
display:flex;
flex-direction:column;
  
     @media only screen and (min-width: 1440px) {
    display:block;
    margin-left: 168px;
   }
`;
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
transition:background-color {({theme})=>theme.animation.transition};
outline:transparent;

&:hover{
  background-color:${({ theme }) => theme.colors.hover};
};
`;
