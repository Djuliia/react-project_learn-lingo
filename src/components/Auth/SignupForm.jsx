import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/firebase';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMsg,
  EyeBtn,
  Label,
  StyledField,
  Text,
  Title,
  Wrapper,
} from './Form.styled';
import sprite from '../../images/sprite.svg';

export const SignupForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
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
          <label aria-label="registration name">
            <StyledField type="text" name="name" placeholder="Name" />
            <ErrorMsg name="name" component="div" />
          </label>
          <label aria-label="registration email">
            <StyledField type="email" name="email" placeholder="Email" />
            <ErrorMsg name="email" component="div" />
          </label>
          <Label aria-label="registration password">
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
          <ErrorMsg name="password" component="div" />
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
