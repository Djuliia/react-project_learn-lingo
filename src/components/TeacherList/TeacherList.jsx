import { useEffect } from 'react';
import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { fetchData } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeachers } from '../../redux/selectors.js';

export const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ul>
      {teachers.map(teacher => (
        <li key={teacher.id}>
          <TeacherCard card={teacher} />
        </li>
      ))}
    </ul>
  );
};
