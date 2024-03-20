import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { ErrMsg } from './RegisterForm.styled';
import { EyeOff } from 'components/icons/EyeOff';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';
import { useState } from 'react';
import { toast } from 'react-hot-toast';


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
    //  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('This field is required'),
});

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  

  const handleSubmit = ({ name, email, password }, actions) => {
    const auth = getAuth();
   
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>{
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
       })
      
      .catch(error => {
        toast.error('User is already exist');
      });

    actions.resetForm();
  };

  return (
    <div>
      <h1>Registration</h1>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">
            Name
            <Field id="name" name="name" />
            <ErrMsg name="name" component="p" />
          </label>

          <label htmlFor="email">
            Email
            <Field id="email" name="email" type="email" />
            <ErrMsg name="email" component="p" />
          </label>

          <label htmlFor="password">
            Password
            <Field id="password" name="password" />
            <EyeOff onClick={() => {
              setPasswordShown(!passwordShown);
            }}/>
            <ErrMsg name="password" component="p" />
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};
