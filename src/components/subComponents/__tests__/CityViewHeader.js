import React from 'react';
import ReactDOM from 'react-dom'
import {render} from '@testing-library/dom';
import CityViewHeader from '../CityViewHeader';

test('all data is rendered', ()=> {
    const fakeCity = 'LoganVille'
    const fakePopulation = '12743' 
    const comp = render(<CityViewHeader cityData={{city: fakeCity, population: fakePopulation}}/>)
    const image = comp.getByName('img')
    image.src='test.png'
    expect(comp.textContent).toMatch(fakePopulation)
    expect(comp.textContent).toMatch(fakeCity)
    expect(image.src).toMatch('test.png')
})