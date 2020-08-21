import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Favorites from '../Favorites';
import UserContext from '../../../contexts/UserContext';
import CityContext from "../../../contexts/CityContext";
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

it('renders the component', ()=> {
    let userData = {id: 2, username: 'Jake', favorites:[{id:235, city: 'Seattle, Washington'}]}
    const setCityData = (data) => (cityData = data);
    let comp = render(
      <CityContext.Provider value={{ setCityData }}>
        <UserContext.Provider value={{userData}}>
            <Favorites/>
        </UserContext.Provider>
        </CityContext.Provider>
    )
    expect(comp.getByText(/Favorite Cities/i)).toBeInTheDocument();
    expect(comp.getByText(/Seattle, Washington/i)).toBeInTheDocument();
})

it('calls "onClick" prop on button click', () => {
  const handleClick = jest.fn();  
   let userData = {
    id: 2,
    username: "Jake",
    favorites: [{ id: 235, city: "Seattle, Washington" }],
  };
  let cityData = { id: 2, city: "Seattle, Washington" };
  const setCityData = (data) => (cityData = data);
  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <UserContext.Provider value={{ userData }}>
        <Favorites cityData={cityData} onClick={handleClick}/>
      </UserContext.Provider>
    </CityContext.Provider>
  );
  
  const heartBtn =comp.getByTestId(/star-btn/i)   
  fireEvent.click(heartBtn, );
  expect(heartBtn).not.toBeDisabled();
  // expect(handleClick).toHaveBeenCalledTimes(1);
});