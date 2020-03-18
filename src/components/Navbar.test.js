import React from 'react';
import { Route } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar.js';

it('renders without crashing', () => {
  render(
    <Router>
      <Route
        path="/"
        render={({ history, location }) => (
          <Navbar history={history} location={location} /> 
        )}
     />
    </Router>
  );
});

it('renders About link', () => {
  const { getByText } = render(
    <Router>
      <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} /> 
          )}
       />
    </Router>
  );

  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders sign in / sign up link', () => {
  const { getByText } = render(
    <Router>
      <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} /> 
          )}
       />
    </Router>);
  const linkElement = getByText(/sign in \/ sign up/i);
  expect(linkElement).toBeInTheDocument();
});
