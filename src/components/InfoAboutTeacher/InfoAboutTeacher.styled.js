import { styled } from 'styled-components';

export const WrapperInfoAboutTeacher = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    height:auto;
  }
`;

export const BoxPhoto = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const StyledStatus = styled.i`
  position: absolute;
  top: 18%;
  right: 11%;
`;

export const BlokNameRating = styled.div`
  display: flex;
  flex-direction:column;

     @media only screen and (min-width: 1440px) {
    flex-direction:row;
     gap: 149px;
   }
`;

export const Subtitle = styled.h4`
  margin-bottom: 8px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtitle};
  white-space:nowrap;
`;

export const TitleName = styled.h2`
  margin-bottom: 32px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const BlockRating = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  
 @media only screen and (min-width: 1440px) {
    flex-direction:row;
     width: 607px;
  height: 24px;
  gap: 32px;
   }

`;

export const BlokIcon = styled.div`
  display: flex;
  gap: 8px;
  
  align-items: center;
   @media only screen and (min-width: 1440px) {
    justify-content: center;
   }
`;

export const Text = styled.p`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
     @media only screen and (min-width: 1440px) {
    white-space: nowrap;
   }
  
`;

export const TextBefore = styled.p`
  position: relative;
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 113%;

    width: 1px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.before};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction:column;
  margin-bottom: 8px;
   @media only screen and (min-width: 1440px) {
    flex-direction:row;
     
   }
`;

export const TextUnderline = styled.p`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  text-decoration: underline;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.numeric};
`;
