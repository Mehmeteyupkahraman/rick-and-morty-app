import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from '../components/EpisodeCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
      setEpisodes(response.data.results);
      setTotalPages(response.data.info.pages);
    };
    fetchEpisodes();
  }, [currentPage]);

  return (
    <div>
      <h1>Rick and Morty Bölümleri</h1>
      <div className="episode-list">
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;