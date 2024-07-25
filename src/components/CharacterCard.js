import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesReducer';

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const handleAddFavorite = () => {
    dispatch(addFavorite(character));
  };
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(character.id));
  };
  
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <button onClick={handleAddFavorite}>Favorilere Ekle</button>
      <button onClick={handleRemoveFavorite}>Favorilerden Çıkar</button>
    </div>
  );
};

export default CharacterCard;