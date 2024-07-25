import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const EpisodePage = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      setEpisode(response.data);
      const characterPromises = response.data.characters.map(url => axios.get(url));
      const characterResponses = await Promise.all(characterPromises);
      setCharacters(characterResponses.map(res => res.data));
    };
    fetchEpisode();
  }, [id]);

  return (
    <div>
      {episode && (
        <div>
          <h1>{episode.name}</h1>
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
        </div>
      )}
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default EpisodePage;