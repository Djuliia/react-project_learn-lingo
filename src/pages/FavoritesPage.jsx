import { Favorites } from 'components/Favorites/Favorites';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import sprite from '../images/sprite.svg';
import { Button } from 'components/Home/Home.styled';
import { Container, Wrapper } from 'components/Favorites/Favorites.styled';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length > 0 ? (
        <Favorites />
      ) : (
        <Wrapper>
          <h2>No favorites yet... </h2>
          <p>Add teachers you like to your favorites</p>
          <svg width="128" height="128">
            <use href={`${sprite}#heart-icon`}></use>
          </svg>
          <Button to="/teachers">Start exploring</Button>
        </Wrapper>
      )}
    </Container>
  );
};

export default FavoritesPage;
