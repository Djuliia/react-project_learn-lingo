import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, StyledField, Text, Title, Wrapper } from './SignupForm.styled';

export const SignupForm = () => {
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
        onSubmit={values => {}}
      >
        <Form>
          <div>
            <StyledField type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <StyledField type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
