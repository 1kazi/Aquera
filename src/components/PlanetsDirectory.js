// src/components/PlanetsDirectory.js
import React, { useEffect, useState } from 'react';
import { fetchPlanets } from '../services/SwapiService';
import PlanetCard from './PlanetCard';

const paginationStyle = {
  margin: '20px 0',
  textAlign: 'center',
};

const buttonStyle = {
  marginRight: '5px',
  padding: '10px 15px',
  background: '#007bff',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    loadPlanets();
  }, []);

  const loadPlanets = async (pageUrl = 'https://swapi.dev/api/planets/?format=json') => {
    const data = await fetchPlanets(pageUrl);
    setPlanets(data.results);
    setNextPage(data.next);
    setPreviousPage(data.previous);
  };

 // In PlanetsDirectory.js, wrap the mapping of planets with a container div
return (
    <div>
      <div className="planets-grid">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <div style={paginationStyle}>
        {previousPage && (
          <button style={buttonStyle} onClick={() => loadPlanets(previousPage)}>
            Previous
          </button>
        )}
        {nextPage && (
          <button style={buttonStyle} onClick={() => loadPlanets(nextPage)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
  
};

export default PlanetsDirectory;
