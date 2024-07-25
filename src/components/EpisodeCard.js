import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
  return (
    <div className="episode-card">
      <h3>{episode.name}</h3>
      <Link to={`/episodes/${episode.id}`}>Detaylar</Link>
    </div>
  );
};

export default EpisodeCard;