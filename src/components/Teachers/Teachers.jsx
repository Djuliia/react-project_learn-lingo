import { Filter } from 'components/Filter/Filter';
import { TeacherList } from 'components/TeacherList/TeacherList';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  // selectError,
  selectFilteredTeachers,
  selectLoading,
} from '../../redux/selectors';
import { BtnMore, Section } from './Teachers.styled';
import { Loader } from 'components/Loader';

export const Teachers = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const isLoading = useSelector(selectLoading);

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  return (
    <Section style={{ marginBottom: '96px' }}>
      <Filter />
      {isLoading && <Loader />}
      <TeacherList visibleCards={visibleCards} />
      {visibleCards < filteredTeachers.length && (
        <BtnMore onClick={handleLoadMore} style={{ margin: '0 auto' }}>
          Load more
        </BtnMore>
      )}
    </Section>
  );
};
