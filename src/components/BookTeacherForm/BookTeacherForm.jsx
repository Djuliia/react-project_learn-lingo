import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMsg,
  FieldWrap,
  Legend,
  RadioBox,
  RadioField,
  RadioWrap,
  StyledField,
  StyledForm,
} from './BookTeacherForm.styled';
import { Wrapper } from 'components/BookTeacher/BookTeacher.styled';

export const BookTeacherForm = () => {
  return (
    <Formik
      initialValues={{
        reason: '',
        name: '',
        email: '',
        tel: '',
      }}
      validationSchema={Yup.object({
        reason: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        tel: Yup.string().required('Required'),
      })}
      onSubmit={values => {}}
    >
      <StyledForm>
        <Wrapper role="group" aria-labelledby="reason-group-label">
          <Legend id="reason-group-label">
            What is your main reason for learning English?
          </Legend>
          <RadioWrap>
            <RadioBox>
              <RadioField
                type="radio"
                id="career"
                name="reason"
                value="career"
              />
              <label htmlFor="career">Career and business</label>
            </RadioBox>
            <RadioBox>
              <RadioField
                type="radio"
                id="lesson"
                name="reason"
                value="lesson"
              />
              <label htmlFor="lesson">Lesson for kids</label>
            </RadioBox>
            <RadioBox>
              <RadioField
                type="radio"
                id="abroad"
                name="reason"
                value="abroad"
              />
              <label htmlFor="abroad">Living abroad</label>
            </RadioBox>
            <RadioBox>
              <RadioField type="radio" id="exams" name="reason" value="exams" />
              <label htmlFor="exams">Exams and coursework</label>
            </RadioBox>
            <RadioBox>
              <RadioField
                type="radio"
                id="culture"
                name="reason"
                value="culture"
              />
              <label htmlFor="culture">Culture, travel or hobby</label>
            </RadioBox>
          </RadioWrap>
          <ErrorMsg name="reason" component="div" />
        </Wrapper>
        <FieldWrap>
          <StyledField type="text" name="name" placeholder="Full Name" />
          <ErrorMsg name="name" component="div" />
          <StyledField type="email" name="email" placeholder="Email" />
          <ErrorMsg name="email" component="div" />
          <StyledField type="tel" name="tel" placeholder="Phone number" />
          <ErrorMsg name="tel" component="div" />
        </FieldWrap>
        <Button type="submit">Book</Button>
      </StyledForm>
    </Formik>
  );
};
