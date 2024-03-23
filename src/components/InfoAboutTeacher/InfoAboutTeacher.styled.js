import { styled } from 'styled-components';

export const WrapperInfoAboutTeacher = styled.div`
  display: flex;
  gap: 48px;
`;

export const BoxPhoto = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 100px;
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
  gap: 149px;
`;

export const Subtitle = styled.h4`
  margin-bottom: 8px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtitle};
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
  gap: 32px;
  width: 607px;
  height: 24px;

  /* &::before{
    content:'';
    position: absolute;
    top:50px;
    left:0;
    
     width: 252px;
    height: 1px;
    color:red;
  } */
`;

export const BlokIcon = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  white-space: nowrap;
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const TextUnderline = styled.p`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  text-decoration: underline;
`;
