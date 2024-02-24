import { Filter } from 'components/Filter/Filter';
import { TeacherList } from 'components/TeacherList/TeacherList';
import React from 'react';

export const Teachers = () => {
  return (
    <section>
      <Filter />
      <TeacherList />

      {/* <BookTeacher /> */}
    </section>
  );
};
