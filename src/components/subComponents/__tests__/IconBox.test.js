import React from "react";
import { render } from '@testing-library/react';
import IconBox from "../IconBox";

it(`renders "Find Ur place" heading`, async () => {
  const { getByText } = render(<IconBox />);
  const heading = await getByText(/"Find Ur" place/); 
  expect(heading).toBeInTheDocument();
})

it(`renders three icons`, () => {
  const { getByAltText } = render(<IconBox />);
  const compareIcon = getByAltText(/compare icon/i);
  const searchIcon = getByAltText(/search icon/i);
  const pinIcon = getByAltText(/pin icon/i);

  expect(compareIcon).toBeInTheDocument();
  expect(searchIcon).toBeInTheDocument();
  expect(pinIcon).toBeInTheDocument();
});

it(`renders card content`, () => {
  const { getByText } = render(<IconBox />);

  expect(getByText(/quickly compare/i)).toBeInTheDocument();
  expect(getByText(/search for a city to view/i)).toBeInTheDocument();
  expect(getByText(/instantly receive a recommendation/i)).toBeInTheDocument();
});
