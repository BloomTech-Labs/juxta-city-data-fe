import React from 'react';
import { render } from '@testing-library/react';

import BestCities from '../BestCities';

it('It renders BestCities component without crashing', () => {
  const { getByText } = render(<BestCities />);
});
