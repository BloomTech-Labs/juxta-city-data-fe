import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import Header from '../Header';
import CityContext from '../../../contexts/CityContext';

jest.mock('axios', () => ({
  get: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

it('renders heading and search bar', () => {
  let cityData = '';
  const setCityData = (data) => (cityData = data);

  const { getByPlaceholderText, getByText } = render(
    <CityContext.Provider value={{ setCityData }}>
      <Header />
    </CityContext.Provider>
  );

  expect(getByText(/find your way/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/search for a city/i)).toBeInTheDocument();
});
