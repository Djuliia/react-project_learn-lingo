import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, StyledField, Text, Title, Wrapper } from './Form.styled';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/firebase';

export const SignupForm = ({ closeModal }) => {
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        resetForm();
      })
      .catch(e => console.log(e));
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
            <ErrorMessage name="name" component="div" />
          </label>
          <label aria-label="registration email">
            <StyledField type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label aria-label="registration password">
            <StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
