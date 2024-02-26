import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

import {
  Button,
  EyeBtn,
  Label,
  StyledField,
  Text,
  Title,
  Wrapper,
} from './Form.styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/firebase';

export const SigninForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        resetForm();
        closeModal();
      })
      .catch(e => console.log(e));
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Wrapper>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <label aria-label="signin email">
            <StyledField type="email" name="email" placeholder="Email" />

            <ErrorMessage name="email" component="div" />
          </label>
          <div>
            <Label>
              <StyledField
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <EyeBtn type="button" onClick={() => handleTogglePassword()}>
                <svg width="20" height="20">
                  {showPassword ? null : <use href={`${sprite}#eye-off`} />}
                </svg>
              </EyeBtn>
            </Label>
            <ErrorMessage name="password" component="div" />
          </div>
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
