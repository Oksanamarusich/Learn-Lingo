import { styled } from 'styled-components';

export const ListReview = styled.ul`
  width: 417px;
  height: 200px;
`;

export const ListItem = styled.li`
  margin-bottom: 32px;
`;
export const BoxUser = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 12px;
`;

export const AvatarUser = styled.img`
  
  border-radius: 100px;
  width: 44px;
  height: 44px;
`;
export const Subtitle = styled.h4`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.subtitle};
`;
export const WrapperIconText = styled.div`
  display: flex;
  gap: 1px;
`;
export const Text = styled.p`
  font-family: var(--family);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
export const DescriptionReviews = styled.p`
  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
