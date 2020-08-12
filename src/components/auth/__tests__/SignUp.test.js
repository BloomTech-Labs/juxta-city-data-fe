import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../SignUp.js';
import { TRUE } from 'node-sass';

describe('<SignUp />', () => {
    it('renders without crashing', () => {
        render(<SignUp />);
    })
})

describe("input values", () => {    
    it('Username updates on change', () => {
        const {queryByPlaceholderText} = render(<SignUp />)
        const typeInput = queryByPlaceholderText('username')
        fireEvent.change(typeInput, {target : {value: "test"}})
        expect(typeInput.value).toBe("test")
    })

    it('Password updates on change', () => {
        const {queryByPlaceholderText} = render(<SignUp />)
        const typeInput = queryByPlaceholderText('password')
        fireEvent.change(typeInput, {target : {value: "test"}})
        expect(typeInput.value).toBe("test")
    })

    it('Email updates on change', () => {
        const {queryByPlaceholderText} = render(<SignUp />)
        const typeInput = queryByPlaceholderText('email')
        fireEvent.change(typeInput, {target : {value: "test@test.com"}})
        expect(typeInput.value).toBe("test@test.com")
    })

    it('calls "onClick" prop on button click', () => {
        
        const {queryByPlaceholderText} = render(<SignUp />)
        const handleSubmit = jest.fn();
        const passwordInput = queryByPlaceholderText('password');
        const usernameInput = queryByPlaceholderText('username');
        const emailInput = queryByPlaceholderText('email')

        if(usernameInput && passwordInput && emailInput === TRUE){
        const { getByText } = render(<SignUp onClick={handleSubmit} />);      
        fireEvent.click(getByText(/register/i));
        expect(handleSubmit).toHaveBeenCalled();
        }
        
      });
})