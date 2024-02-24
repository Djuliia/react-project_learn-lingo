import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import {
  Button,
  EyeBtn,
  FieldWrap,
  StyledField,
  Text,
  Title,
  Wrapper,
} from 'components/SignupForm/SignupForm.styled';

export const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = values => {
    console.log(values);
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
          <div>
            <StyledField type="email" name="email" placeholder="Email" />

            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <FieldWrap>
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
            </FieldWrap>
            <ErrorMessage name="password" component="div" />
          </div>
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
