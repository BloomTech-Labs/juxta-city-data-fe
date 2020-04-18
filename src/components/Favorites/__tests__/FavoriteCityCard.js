import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import FavoriteCityCard from '../FavoriteCityCard';
import UserContext from '../../../contexts/UserContext';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

it('renders the CityCard', ()=> {
    let userData = {id: 2, username: 'Jake', favorites:[{id:235, city: 'Seattle, Washington'}]}
    let cityData = {id: 2, city: 'Seattle, Washington'}
    let comp = render(
        <UserContext.Provider value={{userData}}>
            <FavoriteCityCard cityData={cityData}/>
        </UserContext.Provider>
        
    )
    expect(comp.getByText(`${cityData.city}`)).toBeInTheDocument();
})