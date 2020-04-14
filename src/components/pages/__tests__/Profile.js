import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../Profile.js';

jest.mock('../../Navbar')

it('renders without crashing', () => {
  const { getByText } = render(<Profile/>);

  expect(getByText(/user profile goes here!/i)).toBeInTheDocument();
  expect(getByText(/welcome user!/i)).toBeInTheDocument();

});

