import React from 'react';
import {render} from '@testing-library/react';
import RecommendedCard from '../RecommendedCard';
import CityContext from '../../../contexts/CityContext';
import UserContext from '../../../contexts/UserContext';


it("renders the card and data", ()=>{
    let userData = {id: 2, username: 'Jake', favorites:[{id:235, city: 'Seattle, Washington'}]};
    let cityData = {
        id: 223,
        name_and_state: 'Seattle, Washington',
        livability_score: 56.5,
        population_desc: 'test pop'
    }
    let setCityData = data => cityData = {...cityData,data};
    let comp = render(
        <UserContext.Provider value={{userData}}>
            <CityContext.Provider value={{setCityData}}>
                <RecommendedCard cityData={cityData}/>
            </CityContext.Provider>
        </UserContext.Provider>
        
        
    )
    expect(comp.getByText(/Seattle, Washington/i)).toBeInTheDocument();
    expect(comp.getByText(/56.5/i)).toBeInTheDocument()
    expect(comp.getByAltText(/heart icon/i)).toBeInTheDocument()
    expect(comp.getByText(/test pop/i)).toBeInTheDocument()
})