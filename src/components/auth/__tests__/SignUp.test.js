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
        const typeInput = queryByPlaceholderText('Username (required)')
        fireEvent.change(typeInput, {target : {value: "test"}})
        expect(typeInput.value).toBe("test")
    })

    it('Password updates on change', () => {
        const {queryByPlaceholderText} = render(<SignUp />)
        const typeInput = queryByPlaceholderText('Password (required)')
        fireEvent.change(typeInput, {target : {value: "test"}})
        expect(typeInput.value).toBe("test")
    })

    it('Email updates on change', () => {
        const {queryByPlaceholderText} = render(<SignUp />)
        const typeInput = queryByPlaceholderText('Email (required)')
        fireEvent.change(typeInput, {target : {value: "test@test.com"}})
        expect(typeInput.value).toBe("test@test.com")
    })

    it('calls "onClick" prop on button click', () => {
        
        const {queryByPlaceholderText} = render(<SignUp />)
        const handleSubmit = jest.fn();
        const passwordInput = queryByPlaceholderText('Password (required)');
        const usernameInput = queryByPlaceholderText('Username (required)');
        const emailInput = queryByPlaceholderText('Email (required)')

        if(usernameInput && passwordInput && emailInput === TRUE){
        const { getByText } = render(<SignUp onClick={handleSubmit} />);      
        fireEvent.click(getByText(/submit/i));
        expect(handleSubmit).toHaveBeenCalled();
        }
        
      });
})