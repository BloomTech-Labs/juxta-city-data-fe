import React from 'react';
import {render} from '@testing-library/react';
import RecommendedComponent from '../RecommendedComponent';
import CityContext from '../../../contexts/CityContext';
import RecomendedContext from '../../../contexts/RecomendedContext';
import UserContext from '../../../contexts/UserContext';


it('renders the app', ()=> {
    let recomendedCity = [{id: 453, name_and_state: 'Stockton',livability_score: 76.5,population_desc: 'lorem ipsum blah blah blah'}];
    let cityData = '';
    let setCityData = data => cityData = cityData + data;
    let userData = {id: 2, username: 'Jake', favorites:[{id:235, city: 'Seattle, Washington'}]};
    let comp = render (
        <CityContext.Provider value={{setCityData}}>
            <UserContext.Provider value={{userData}}>
                <RecomendedContext.Provider value={{recomendedCity}}>
                    <RecommendedComponent/>
                </RecomendedContext.Provider>
            </UserContext.Provider>
            
        </CityContext.Provider>
    )
    expect(comp.getByText(/Your Recommended Cities/i)).toBeInTheDocument();
    expect(comp.getByText(/Stockton/i)).toBeInTheDocument();
    expect(comp.getByAltText(/cityscape/i)).toBeInTheDocument();
});