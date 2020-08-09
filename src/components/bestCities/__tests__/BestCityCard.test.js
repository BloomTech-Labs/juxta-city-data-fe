import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import BestCityCard from '../BestCityCard';
import CityContext from '../../../contexts/CityContext';

afterEach(cleanup);

it('should render CityCard', () => {
  let cityData = '';
  const setCityData = (data) => (cityData = data);

  const card = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <BestCityCard cities={cityData} />
      </Router>
    </CityContext.Provider>
  );
  expect(card.getByTestId(/city-card/i)).toBeInTheDocument();
});
