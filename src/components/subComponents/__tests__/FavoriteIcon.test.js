import React from 'react';
import {render} from '@testing-library/react';
import FavoriteIcon from '../FavoriteIcon';
import UserContext from '../../../contexts/UserContext';


it('renders the Icon', ()=> {
    let cityData = {id: 2, city: 'Seattle, Washington'}
    let userData = {id: 2, username: 'Jake', favorites:[{id:235, city: 'Seattle, Washington'}]}
    let setUserData = (data) => userData = data;
    let comp = render(
        <UserContext.Provider value={{userData, setUserData}}>
            <FavoriteIcon cityData={cityData}/>
        </UserContext.Provider>   
    )
    const image = comp.getByTestId(/star-btn/i) 
    expect(image).toBeInTheDocument();
})