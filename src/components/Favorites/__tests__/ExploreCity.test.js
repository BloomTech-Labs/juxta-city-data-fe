import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ExploreCity from '../ExploreCity';
import CityContext from '../../../contexts/CityContext';

afterEach(cleanup);
it('renders without crashing', () => {
  let cityData = '';
  let setCityData = data => (cityData = data);

  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <ExploreCity />
    </CityContext.Provider>
  );

  expect(comp.getByText(/Search for a city/i)).toBeInTheDocument();
  expect(
    comp.getByText(/Or take our Survey to get recommendations!/i)
  ).toBeInTheDocument();
});
it('renders search bar ', () => {
  let cityData = '';
  let setCityData = data => (cityData = data);

  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <ExploreCity />
    </CityContext.Provider>
  );
  expect(comp.getByPlaceholderText(/Search for a city/i)).toBeInTheDocument();
});

it('renders survey button ', () => {
  let cityData = '';
  let setCityData = data => (cityData = data);

  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <ExploreCity />
    </CityContext.Provider>
  );
  expect(comp.getByText(/take the survey/i)).toBeInTheDocument();
});
it('on click the survey button ', () => {
  let cityData = '';
  let setCityData = data => (cityData = data);
  const handleClick = jest.fn();

  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <ExploreCity onClick={handleClick} />
    </CityContext.Provider>
  );

  const takeSurveyBtn = comp.getByText(/take the survey/i);
  expect(takeSurveyBtn).toBeInTheDocument();
  expect(takeSurveyBtn).not.toBeDisabled();
//   fireEvent.click(takeSurveyBtn);
//   expect(handleClick).toHaveBeenCalled();
});
