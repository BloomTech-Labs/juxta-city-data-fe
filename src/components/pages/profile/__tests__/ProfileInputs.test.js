import React from 'react';
import ProfileInputs from '../ProfileInputs';
import "@testing-library/jest-dom/extend-expect";
import { render,  fireEvent } from "@testing-library/react";




describe("bang", () => {
    let handleSubmit;
    let addHandleChange;
    beforeEach(() => {
        handleSubmit = jest.fn();
        addHandleChange = jest.fn();
    });

    afterEach(() => {
        handleSubmit.mockReset();
        addHandleChange.mockReset();
    });

    it('', () => {
        const bang = render(<ProfileInputs handleSubmit={handleSubmit} addHandleChange={addHandleChange} />)
        const firstNameInput = bang.getByTestId('first_name');
        fireEvent.change(firstNameInput, { target: { value: 'Conary' } });
        expect(addHandleChange).toHaveBeenCalled();
        const lastNameInput = bang.getByTestId('last_name');
        fireEvent.change(lastNameInput, { target: { value: 'Beckford' } });
        expect(addHandleChange).toHaveBeenCalled();
        
        expect(bang.getByTestId("first_name").value).toEqual("Conary");
        expect(bang.getByTestId("last_name").value).toEqual("Beckford");
        expect(bang.getByText('Add Profile')).toBeVisible()
        bang.getByTestId('submit').click();

        expect(handleSubmit).toHaveBeenCalled();
    })
})
