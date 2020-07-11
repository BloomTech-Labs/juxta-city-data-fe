import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Favorites from '../Favorites';
import UserContext from '../../../contexts/UserContext';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

it('renders the component', ()=> {
    let userData = {id: 2, username: 'Jake', favorites:[{id:235, city: 'Seattle, Washington'}]}
    let comp = render(
        <UserContext.Provider value={{userData}}>
            <Favorites/>
        </UserContext.Provider>
    )
    expect(comp.getByText(/Favorite Cities/i)).toBeInTheDocument();
    expect(comp.getByText(/Seattle, Washington/i)).toBeInTheDocument();
})