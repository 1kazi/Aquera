// src/components/ResidentDetails.js
import React from 'react';

const ResidentDetails = ({ resident }) => {
  return (
    <div className="resident-details">
      <p className="resident-detail resident-name">Name: {resident.name}</p>
      <p className="resident-detail">Height: {resident.height}</p>
      <p className="resident-detail">Mass: {resident.mass}</p>
      <p className="resident-detail">Gender: {resident.gender}</p>
    </div>
  );
};

export default ResidentDetails;
