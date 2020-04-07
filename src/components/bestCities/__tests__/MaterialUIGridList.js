import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import MaterialUIGridList from '../MaterialUIGridList';

import CityContext from '../../../contexts/CityContext';

it('should render gridList', () => {
  let cityData = '';
  const setCityData = data => (cityData = data);
  const gridList = [1, 2, 3, 4];

  render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <MaterialUIGridList gridList={gridList} />
      </Router>
    </CityContext.Provider>,
  );
});
