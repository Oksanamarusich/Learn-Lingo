import { Form } from 'formik';
import { styled } from 'styled-components';

export const ContainerRegister = styled.div`
  position: relative;

  padding: 64px;
  border-radius: 30px;
  width: 565px;
  height: 599px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 438px;
  height: 198px;
`;
