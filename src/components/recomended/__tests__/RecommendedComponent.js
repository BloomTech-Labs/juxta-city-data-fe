import React from 'react';
import {render} from '@testing-library/react';
import RecommendedComponent from '../RecommendedComponent';
import CityContext from '../../../contexts/CityContext';
import UserContext from '../../../contexts/UserContext';
import { ExpansionPanelActions } from '@material-ui/core';


it('renders the app', ()=> {
    let userData = {id: 2, username: 'Jake', favorites:[], recommended: [{id: 223,city: 'Seattle, Washington',livabilityScore: 56.5,population_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper mauris, sed tincidunt dui laoreet sed. Donec at elementum massa. Vivamus pellentesque quam ligula, a malesuada mauris condimentum vitae. Nullam metus erat, tincidunt vitae tortor sit amet, interdum ullamcorper nunc. Curabitur eget odio metus. Praesent tempor tincidunt arcu, ut ornare dui porta sed. Mauris a dignissim quam. Phasellus lobortis venenatis sagittis.'},{id: 453,city: 'Stockton',livabilityScore: 76.5,population_desc: 'lorem ipsum blah blah blah'},]};
    let cityData = '';
    let setCityData = data => cityData = cityData + data;
    let comp = render (
        <CityContext.Provider value={setCityData}>
            <UserContext.Provider value={{userData}}>
                <RecommendedComponent/>
            </UserContext.Provider>
        </CityContext.Provider>
    )
    expect(comp.getByText(/Your Recommended Cities/i)).toBeInTheDocument();
    expect(comp.getByText(/Seattle, Washington/i)).toBeInTheDocument();
    expect(comp.getByAltText(/cityscape/i)).toBeInTheDocument();
})