import { Form } from 'formik';
import { styled } from 'styled-components';

export const ContainerRegister = styled.div`
  position: relative;
  padding: 60px 20px;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  overflow: auto scroll;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  @media only screen and (min-width: 1440px) {
    padding: 64px;
    width: 565px;
    height: 599px;
    overflow: initial;
  }
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media only screen and (min-width: 1440px) {
    width: 438px;
    height: 198px;
  }
`;
