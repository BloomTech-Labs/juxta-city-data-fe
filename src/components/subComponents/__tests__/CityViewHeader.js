import React from 'react';
import ReactDOM from 'react-dom'
import CityViewHeader from '../CityViewHeader';

test('all data is rendered', ()=> {
    const div = document.createElement('div')
    const fakeCity = 'LoganVille'
    const fakePopulation = '12743' 
    ReactDOM.render(<CityViewHeader cityData={{city: fakeCity, population: fakePopulation}}/>, div)
    const image = div.querySelector('img')
    image.src='test.png'
    expect(div.textContent).toMatch(fakePopulation)
    expect(div.textContent).toMatch(fakeCity)
    expect(image.src).toMatch('test.png')
})