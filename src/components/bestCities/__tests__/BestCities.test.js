import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import CityContext from '../../../contexts/CityContext';
import BestCities from '../BestCities';
import { getBestCities } from '../../../functions/index';
import axios from 'axios';

jest.mock('axios');

it('renders without crushing', async () => {
  let cityData = '';
  const setCityData = data => (cityData = data);
  const dataGrid = [
    {
      Average_Commute_Time: 32.8,
      City_Name: 'Manvel',
      Cost_of_Living_Index: 86.4,
      Crime_rate: '76.0',
      Median_Age: 34.5,
      Median_House_Value: 232071,
      Median_Income: 96960,
      Median_Rent: 1531,
      city: 'Manvel, Texas',
      state: 'Texas',
    },
    {
      Average_Commute_Time: 34.8,
      City_Name: 'Manvel2',
      Cost_of_Living_Index: 84.4,
      Crime_rate: '76.0',
      Median_Age: 33.5,
      Median_House_Value: 432071,
      Median_Income: 46960,
      Median_Rent: 2531,
      city: 'Manvel2, Texas',
      state: 'Texas2',
    },
  ];

  axios.get.mockResolvedValue({ data: dataGrid });

  const gridList = await getBestCities();
  const comp = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <BestCities gridList={gridList} />
      </Router>
    </CityContext.Provider>
  );
  expect(gridList).toEqual(dataGrid);
  expect(comp.getByText(/best cities/i)).toBeInTheDocument();
  expect(comp.getByTestId(/grid-tile/i)).toBeInTheDocument();
});
