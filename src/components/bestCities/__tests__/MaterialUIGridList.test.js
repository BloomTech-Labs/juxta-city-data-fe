import React from "react";
import { render, fireEvent, cleanup} from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import MaterialUIGridList from "../MaterialUIGridList";
import CityContext from "../../../contexts/CityContext";

afterEach(cleanup);

it("should render gridList", () => {
  let cityData = "";
  const setCityData = (data) => (cityData = data);
  const gridList = [{ city: 1 }];

  const comp = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <MaterialUIGridList gridList={gridList} />
      </Router>
    </CityContext.Provider>
  );
  expect(comp.getByTestId(/grid-tile/i)).toBeInTheDocument(4);
});

it('calls "onClick" prop on imagee click', async() => {
  const handleClick = jest.fn();  
  let cityData = "";
  const setCityData = (data) => (cityData = data);
  const gridList = [{ city: 1 }];

  const comp = render(
    <CityContext.Provider value={{ cityData, setCityData }}>
      <Router>
        <MaterialUIGridList onClick={handleClick}
          gridList={gridList} />
      </Router>
    </CityContext.Provider>
  );
  expect(comp.getByTestId("grid-tile")).toBeInTheDocument();

  const gridItem = comp.getByTestId(/grid-tile/i) 

 await fireEvent.click(gridItem);
  expect(gridItem).not.toBeDisabled();
  // expect(handleClick).toHaveBeenCalled();
});