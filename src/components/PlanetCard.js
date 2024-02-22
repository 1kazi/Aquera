// src/components/PlanetCard.js
import React, { useEffect, useState } from 'react';
import { fetchResident } from '../services/SwapiService';
import ResidentDetails from './ResidentDetails';




const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentPromises = planet.residents.map(url => fetchResident(url));
      const residentResults = await Promise.all(residentPromises);
      setResidents(residentResults);
    };

    fetchResidents();
  }, [planet.residents]);

// In PlanetCard.js, apply classes to divs for styling
return (
    <div className="planet-card">
      <h2 className="planet-name">{planet.name}</h2>
      <p className="planet-climate">Climate: {planet.climate}</p>
      <p className="planet-population">Population: {planet.population}</p>
      <p className="planet-terrain">Terrain: {planet.terrain}</p>
      <div className="planet-residents">
        <h3>Residents:</h3>
        {residents.length > 0 ? residents.map((resident, index) => (
          <ResidentDetails key={index} resident={resident} />
        )) : <p>No known residents</p>}
      </div>
    </div>
  );
  
};

export default PlanetCard;
