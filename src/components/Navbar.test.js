import React from 'react';
import { Route } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar.js';

it('renders without crashing', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
});

//{...props, location: {...props.location , pathname: ' 'cityview'}}

it('renders About link', () => {
  let location, history;

  const { getByText } = render(
    <Router initialEntries={['/']}>
      <Route
        path="/cityview"
        render={({ history, location }) => {
          history = history;
          location = { pathname: '/cityview'};
          return null;
        }}
      >
        <Navbar />
      </Route>
    </Router>
  );

  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders sign in / sign up link', () => {

  let location, history;

  const { getByText } = render(
    <Router initialEntries={['/cityview']} >
      <Route
          path="/cityview"
          render={({ history, location }) => {
            history = history;
            location = { pathname: '/cityview'};
            return null;
          }}
      >
        <Navbar />
      </Route>
    </Router>);
  const linkElement = getByText(/sign in \/ sign up/i);
  expect(linkElement).toBeInTheDocument();
});
