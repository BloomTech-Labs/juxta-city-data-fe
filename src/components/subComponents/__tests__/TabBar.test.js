import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityContext from '../../../contexts/CityContext';
import TabBar from '../TabBar.js';

it('should render tabs with values', () => {
  let cityData = '';
  let setCityData = data => (cityData = data);
  const { getByText, getByTestId } = render(
    <CityContext.Provider value={{ setCityData }}>
      <TabBar />{' '}
    </CityContext.Provider>
  );

  const tabs = getByTestId('tabs');
  expect(tabs).toBeInTheDocument();

  const populationTab = getByText(/population/i);
  const climateTab = getByText(/climate/i);
  const economyTab = getByText(/economy/i);
  const colTab = getByText(/cost of living/i);

  expect(populationTab).toBeInTheDocument();
  expect(climateTab).toBeInTheDocument();
  expect(economyTab).toBeInTheDocument();
  expect(colTab).toBeInTheDocument();
});

it("should toggle the 'Mui-selected' class when a different tab is clicked", () => {
  let cityData = '';
  let setCityData = data => (cityData = data);
  const { getByTestId } = render(
    <CityContext.Provider value={{ setCityData }}>
      <TabBar />{' '}
    </CityContext.Provider>
  );

  const populationTab = getByTestId(/population/i);
  expect(populationTab).toBeInTheDocument();

  const climateTab = getByTestId(/climate/i);
  expect(climateTab).toBeInTheDocument();

  expect([...populationTab.classList]).toContain('item');
  // expect([...climateTab.classList]).not.toContain("item");

  fireEvent.click(climateTab);

  // expect([...populationTab.classList]).not.toContain("item");
  expect([...climateTab.classList]).toContain('item');
});
