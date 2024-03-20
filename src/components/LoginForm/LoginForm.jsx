import { EyeOff } from 'components/icons/EyeOff';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import * as yup from 'yup';
import { ErrMsg } from './LoginForm.styled';

import { setUser } from '../../redux/auth/authSlice';
import { toast } from 'react-hot-toast';

const FormSchema = yup.object().shape({
  email: yup.string().email().required('This field is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    //  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('This field is required'),
});

export const LoginForm = () => {
    const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

    const handleSubmit = ({ email, password }, actions) => {
      const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(({ user }) =>{
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
       })
            .catch(error=>{
         toast.error("Invalid user!")   
  });


    actions.resetForm();
  };
  return (
    <>
      <h1>Log In</h1>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">
            Email
            <Field id="email" name="email" type="email" />
            <ErrMsg name="email" component="p" />
          </label>

          <label htmlFor="password">
            Password
            <Field id="password" name="password" />
            <EyeOff />
            <ErrMsg name="password" component="p" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};
