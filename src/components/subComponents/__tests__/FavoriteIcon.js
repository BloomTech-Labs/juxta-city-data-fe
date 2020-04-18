import React from 'react';
import axios from 'axios';
import {render, fireEvent} from '@testing-library/react';
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
    const image = comp.getByAltText(/heart icon/i)
    expect(image).toBeInTheDocument();
    expect(image.src).toEqual('http://localhost/emptyheart.png')
    fireEvent.click(image);
    expect(image.src).toEqual('http://localhost/fullheart.png')
    fireEvent.click(image);
    expect(image.src).toEqual('http://localhost/emptyheart.png')
})