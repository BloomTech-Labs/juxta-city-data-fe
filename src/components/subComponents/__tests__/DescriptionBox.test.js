import React from 'react';
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react';
import DescriptionBox from '../DescriptionBox.js';

test('renders all the data in the description box', ()=> {
    const div = document.createElement('div');
    const fakeTitle = 'test1'
    const fakeDescription = 'test2'
    
    ReactDOM.render(<DescriptionBox title={fakeTitle} data={fakeDescription}/>, div)
    expect(div.textContent).toMatch(fakeTitle)
    expect(div.textContent).toMatch(fakeDescription)
})