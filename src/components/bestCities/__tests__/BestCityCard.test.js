import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import BestCityCard from '../BestCityCard';
import CityContext from '../../../contexts/CityContext';

afterEach(cleanup);

it('should render CityCard', () => {
  let cityData = {
    city: 'Chicago',
    LivabilityScore: 90.43567853,
    photo_url: 'https://http.cat/301',
  };
  
  const livability = Math.round(cityData.LivabilityScore);
  const setCityData = data => (cityData = data);

  const card = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <BestCityCard  cities={cityData} livability={livability}/>
      </Router>
    </CityContext.Provider>
  );
  expect(card.getByTestId(/city-card/i)).toBeInTheDocument();
  expect(card.getByText(/Chicago/i)).toBeInTheDocument();
  expect(card.getByText(/Livability Score: 90/i)).toBeInTheDocument();
  expect(card.getByRole('img')).toBeInTheDocument();
});

it('On Click function should be called', () => {
  const handleClick = jest.fn();
  let cityData = {
    city: 'Chicago',
    LivabilityScore: 90.43567853,
    photo_url: 'https://http.cat/301',
  };
  
  const livability = Math.round(cityData.LivabilityScore);
  const setCityData = data => (cityData = data);

  const card = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <BestCityCard handleClick ={handleClick}  cities={cityData} livability={livability}/>
      </Router>
    </CityContext.Provider>
  );

  const cardcity = card.getByTestId(/city-card/i)
  fireEvent.click(cardcity);
  expect(handleClick).toHaveBeenCalled();
  expect(handleClick).toHaveBeenCalledTimes(1);
});