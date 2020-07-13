import React from 'react';
import { render } from '@testing-library/react';
import Liveability from '../Liveability';

it('should render liveability heading', () => {
  const { getByText } = render(<Liveability />)
  expect(getByText(/The Liveability Score/)).toBeInTheDocument();
})

it('should render liveability description', () => {
  const { getByText } = render(<Liveability />)
  expect(getByText(/The Liveability score was designed to help you/)).toBeInTheDocument();
});
