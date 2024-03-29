import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import * as yup from 'yup';

import { EyeOff } from 'components/icons/EyeOff';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  ErrMsg,
  IconStyledEye,
  StyledButtonForm,
  StyledField,
  StyledFieldIcon,
  StyledLabel,
  Text,
  TitleForm,
} from 'components/StyledForm.styled';
import { ContainerRegister, StyledForm } from './RegisterForm.styled';
import { IconClose } from 'components/icons/IconClose';
import { ButtonForm } from 'components/StyledForm.styled';

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: yup.string().email().required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('This field is required'),
});

export const RegisterForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = ({ name, email, password }, actions) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
          })
        );
        toast.success('Registration is successful');
        onClose();
      })

      .catch(error => {
        toast.error('User is already exist');
      });

    actions.resetForm();
  };

  return (
    <ContainerRegister>
      <TitleForm>Registration</TitleForm>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <ButtonForm type="button" onClick={onClose}>
        <IconClose />
      </ButtonForm>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel>
            <StyledField name="name" placeholder="Name" />
            <ErrMsg name="name" component="p" />
          </StyledLabel>

          <StyledLabel>
            <StyledField name="email" type="email" placeholder="Email" />
            <ErrMsg name="email" component="p" />
          </StyledLabel>

          <StyledLabel>
            <StyledFieldIcon
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
            />
            <IconStyledEye onClick={togglePasswordVisibility}>
              <EyeOff />
            </IconStyledEye>

            <ErrMsg name="password" component="p" />
          </StyledLabel>
          <StyledButtonForm type="submit">Sign Up</StyledButtonForm>
        </StyledForm>
      </Formik>
    </ContainerRegister>
  );
};
