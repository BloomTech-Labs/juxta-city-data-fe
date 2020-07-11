import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../SignIn.js';
import { TRUE } from 'node-sass';

describe('<SignIn />', () => {
    it('renders without crashing', () => {
        render(<SignIn />);
    })

})

describe("input values", () => {    
    it('Username updates on change', () => {
        const {queryByPlaceholderText} = render(<SignIn />)
        const typeInput = queryByPlaceholderText('Username')
        fireEvent.change(typeInput, {target : {value: "test"}})
        expect(typeInput.value).toBe("test")
    })

    it('Password updates on change', () => {
        const {queryByPlaceholderText} = render(<SignIn />)
        const typeInput = queryByPlaceholderText('Password')
        fireEvent.change(typeInput, {target : {value: "test"}})
        expect(typeInput.value).toBe("test")
    })

    it('calls "onClick" prop on button click', () => {
        
        const {queryByPlaceholderText} = render(<SignIn />)
        const handleSubmit = jest.fn();
        const passwordInput = queryByPlaceholderText('Password');
        const usernameInput = queryByPlaceholderText('Username')

        if(usernameInput && passwordInput === TRUE){
        const { getByText } = render(<SignIn onClick={handleSubmit} />);      
        fireEvent.click(getByText(/submit/i));
        expect(handleSubmit).toHaveBeenCalled();
        }
        
      });



})