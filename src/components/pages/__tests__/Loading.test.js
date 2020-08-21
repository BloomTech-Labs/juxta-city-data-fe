import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../profile/Loading';

it('renders without crashing', () => {
  render(<Loading />);
});
it('renders the loading text ', () => {
  const comp = render(<Loading />);
  expect(comp.getByText(/Loading your information/i)).toBeInTheDocument();
});
