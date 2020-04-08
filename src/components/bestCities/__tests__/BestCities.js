import React from 'react';

import { MemoryRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import CityContext from '../../../contexts/CityContext';
import BestCities from '../BestCities';

it('should render component', () => {
  let cityData = '';
  const setCityData = data => (cityData = data);

  render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <BestCities />
      </Router>
    </CityContext.Provider>,
  );
});

it('should render header text', () => {
  let cityData = '';
  const setCityData = data => (cityData = data);

  const { getByText } = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <BestCities />
      </Router>
    </CityContext.Provider>,
  );

  expect(getByText(/best cities/i)).toBeInTheDocument();
});
