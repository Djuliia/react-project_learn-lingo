import { TeacherCard } from 'components/TeacherCard/TeacherCard';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';

export const Favorites = () => {
  const favoriteTeachers = useSelector(selectFavorites);

  return (
    <ul>
      {favoriteTeachers.map(card => (
        <TeacherCard key={card.id} card={card} />
      ))}
    </ul>
  );
};
