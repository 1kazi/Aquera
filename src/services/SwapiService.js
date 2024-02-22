// src/services/SwapiService.js

export const fetchPlanets = async (pageUrl = 'https://swapi.dev/api/planets/?format=json') => {
  try {
    const response = await fetch(pageUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return { results: [], next: null, previous: null };
  }
};

export const fetchResident = async (residentUrl) => {
  try {
    const response = await fetch(residentUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching resident:", error);
    return null;
  }
};
