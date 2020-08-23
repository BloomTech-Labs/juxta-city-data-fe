import React from 'react';
import ProfileInputs from '../ProfileInputs';
import "@testing-library/jest-dom/extend-expect";
import { render,  fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';
import { anime } from "react-anime";




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
        const firstNameInput = bang.getByTestId('fname');
        fireEvent.change(firstNameInput, { target: { value: 'Conary' } });
        expect(addHandleChange).toHaveBeenCalled();
        const lastNameInput = bang.getByTestId('lname');
        fireEvent.change(lastNameInput, { target: { value: 'Beckford' } });
        expect(addHandleChange).toHaveBeenCalled();
        
        expect(bang.getByTestId('fname').value).toEqual('Conary');
        expect(bang.getByTestId('lname').value).toEqual('Beckford');
        expect(bang.getByText('Add Profile')).toBeVisible()
        bang.getByTestId('submit').click();

        expect(handleSubmit).toHaveBeenCalled();
    })
})
