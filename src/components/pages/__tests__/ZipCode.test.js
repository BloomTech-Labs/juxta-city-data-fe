import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import ZipCode from '../profile/ZipCode';

it('renders without crashing', () => {
    render(<ZipCode/>)
});

it('renders the label', () => {

    const comp =  render(<ZipCode/>)

    expect(comp.getByLabelText(/zip code/i)).toBeInTheDocument();
});

it('renders input changes', () => {
    
    const handleChange = jest.fn()
    const comp =  render(<ZipCode onChange={handleChange}/>)

    const typeInput = comp.getByPlaceholderText("Zip Code");
    expect(typeInput).toBeInTheDocument()

    fireEvent.change(typeInput, { target: { value: "1234" } });
    expect(typeInput.value).toBe("1234");
});