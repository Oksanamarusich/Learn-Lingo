import { styled } from 'styled-components';

export const CardWrapper = styled.li`
  border-radius: 24px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.primaryBgColor};
`;

export const Button = styled.button`
/* margin-left:164px; */
margin-bottom:32px;
background-color: ${({ theme }) => theme.colors.primaryBgColor};;
font-family: var(--family);
font-weight: 500;
font-size: 16px;
line-height: 1.5;
text-decoration: underline;
text-decoration-skip-ink: none;
color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const WrapperButtonLanguageLevel = styled.div`
margin-left:168px;
`
