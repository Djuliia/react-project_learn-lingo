import { useEffect } from 'react';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { fetchData } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredTeachers } from '../../redux/selectors.js';

export const TeacherList = ({ visibleCards }) => {
  const dispatch = useDispatch();
  const filteredTeachers = useSelector(selectFilteredTeachers);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <ul>
        {filteredTeachers.slice(0, visibleCards).map(teacher => (
          <li key={teacher.id}>
            <TeacherCard card={teacher} />
          </li>
        ))}
      </ul>
    </>
  );
};
