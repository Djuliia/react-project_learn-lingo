import React from 'react';
import teacherAvatar from '../../images/jane.png';
import { BookTeacherForm } from 'components/BookTeacherForm/BookTeacherForm';
import { AvatarWrap, Name, Span, Title, Wrapper } from './BookTeacher.styled';

export const BookTeacher = () => {
  return (
    <Wrapper>
      <Title>Book trial lesson</Title>

      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <AvatarWrap>
        <img src={teacherAvatar} alt="avatar" />
        <div>
          <Span>Your teacher</Span>
          <Name>Jane Smith</Name>
        </div>
      </AvatarWrap>
      <BookTeacherForm />
    </Wrapper>
  );
};
