import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExploreCity from '../profile/ExploreCity';
import CityContext from '../../../contexts/CityContext';
import { MemoryRouter, Route} from 'react-router-dom';

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

test('on click the survey button ', async function test() {
  let location;
  let cityData = '';
  let setCityData = data => (cityData = data);

  const handleClick = jest.fn();

  render(
    <MemoryRouter initialEntries={['/']}>
      <CityContext.Provider value={{ setCityData }}>
        <Route path='/'>
          <ExploreCity onClick={handleClick} />
        </Route>
        <Route
        path="/*"
        render={({ location: loc }) => {
          location = loc
          return null
        }}
      />
      </CityContext.Provider>
    </MemoryRouter>
  );
  await userEvent.type(screen.getByText(/take the survey/i), "react")
  userEvent.click(screen.getByRole("button", { name: /take the survey/i }))

  expect(location.pathname).toEqual("/survey")
});
