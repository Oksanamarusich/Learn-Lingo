import { Field, Form } from 'formik';
import { styled } from 'styled-components';

export const ContainerBookTrial = styled.div`
  position: relative;
  padding: 64px;
  border-radius: 30px;
  width: 599px;
  /* height: 971px; */
  height: 800px;
  overflow: auto scroll;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
`;

export const DescriptionBookTrial = styled.p`
  margin-bottom: 20px;
  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${({ theme }) => theme.colors.secondaryTxtColor};
`;

export const ContainerTeacher = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 14px;
`;

export const AvatarBookTrial = styled.img`
  border-radius: 100px;
`;
export const StyledSpan = styled.span`
  margin-bottom: 4px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  color: ${({ theme }) => theme.colors.subtitle};
`;
export const Text = styled.h3`
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33333;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const RadioGroup = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const RadioGroupLabel = styled.label`
  position: relative;
  display: flex;
  gap: 8px;

  font-family: var(--family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;

export const FieldRadioGroup = styled(Field)`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.before};
  border-radius: 50%;

  cursor: pointer;

  &:checked {
    border: 2px solid ${({ theme }) => theme.colors.buttonBgColor};

    &::after {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: ${({ theme }) => theme.colors.buttonBgColor};
      border-radius: 50%;
      position: absolute;
      top: 47%;
      left: 2.6%;
      transform: translate(-50%, -50%);
    }
  }
`;
