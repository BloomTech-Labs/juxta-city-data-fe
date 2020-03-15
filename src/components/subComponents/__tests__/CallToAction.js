import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import CallToAction from '../CallToAction';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {} ){
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  }
}


it('should render sign up button', () => {
  const { getByText } = renderWithRouter(<CallToAction />);
  const signUpBtn = getByText(/Sign Up/);

  expect(signUpBtn).toBeInTheDocument();
  
});

it('should render call to action text', () => {
  const { getByText } = renderWithRouter(<CallToAction/>);
  
  expect(getByText(/join now and see what the locals love/i)).toBeInTheDocument();
});

it('should route to /signup on button click', () => {
  const { getByText, history } = renderWithRouter(<CallToAction />);
  const signUpBtn = getByText(/Sign Up/);

  expect(signUpBtn).toBeInTheDocument();
  fireEvent.click(signUpBtn);

  expect(history.entries[history.entries.length -1].pathname).toMatch(/\/signin/);

});
