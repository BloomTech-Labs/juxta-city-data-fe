import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import StateSelect from '../profile/StateSelect';

it('renders without crashing', () => {
  render(<StateSelect />);
});

it('renders the label', () => {

    const comp = render(<StateSelect />);

    expect(comp.getByLabelText(/state/i)).toBeInTheDocument();
});

it('renders the options', () => {
   
    const comp = render(<StateSelect />);

    expect(comp.getByText(/Select a state/i)).toBeInTheDocument();
    expect(comp.getByText(/California/i)).toBeInTheDocument();
});

it('renders the options changes', () => {
  const handleChange = jest.fn() 
  const comp = render(<StateSelect onChange={handleChange} />);

  const typeInput = comp.getByPlaceholderText("state");
    expect(typeInput).toBeInTheDocument()

    fireEvent.change(typeInput, { target: { value: "CA" } });
    expect(typeInput.value).toBe("CA");
});