import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../store/favoritesReducer';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (character) => {
    if (window.confirm(`"${character.name}" isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`)) {
      dispatch(removeFavorite(character.id));
    }
  };

  return (
    <div>
      <h1>Favori Karakterler</h1>
      <div className="favorite-list">
        {favorites.map(character => (
          <div key={character.id}>
            <h3>{character.name}</h3>
            <button onClick={() => handleRemoveFavorite(character)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;