import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import MaterialUIGridList from '../MaterialUIGridList';
import CityContext from '../../../contexts/CityContext';

afterEach(cleanup);

it('should render gridList', () => {
  let cityData = '';
  const setCityData = data => (cityData = data);
  const gridList = [{ city: 1 }];

  const comp = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <MaterialUIGridList gridList={gridList} />
      </Router>
    </CityContext.Provider>
  );
  expect(comp.getByTestId(/grid-tile/i)).toBeInTheDocument();
});

it(' Renders all individual cards',  () => {
  const handleClick = jest.fn();
  let cityData = '';
  const setCityData = data => (cityData = data);
  const gridList = [
    {
      city: 'Chicago',
      LivabilityScore: 94.43567853,
    },
    {
      city: 'MIAMI',
      LivabilityScore: 90.43567853,
    }
  ];

  const card = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <MaterialUIGridList onClick={handleClick} gridList={gridList} />
      </Router>
    </CityContext.Provider>
  );
  expect(card.getByTestId(/grid-tile/i)).toBeInTheDocument();
  expect(card.getAllByTestId(/city-card/i)).toHaveLength(2);
  expect(card.getByText(/Chicago/i)).toBeInTheDocument();
  expect(card.getByText(/MIAMI/i)).toBeInTheDocument();
  expect(card.getByText(/Livability Score: 94/i)).toBeInTheDocument();
  expect(card.getByText(/Livability Score: 90/i)).toBeInTheDocument();
  expect(card.getAllByRole('img')).toHaveLength(2);

});
