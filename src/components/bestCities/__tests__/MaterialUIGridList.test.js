import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import MaterialUIGridList from "../MaterialUIGridList";

import CityContext from "../../../contexts/CityContext";

it("should render gridList", () => {
  let cityData = "";
  const setCityData = (data) => (cityData = data);
  const gridList = [{ city: 1 }, { city: 2 }, { city: 3 }, { city: 4 }];

  render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <MaterialUIGridList gridList={gridList} />
      </Router>
    </CityContext.Provider>
  );
});
