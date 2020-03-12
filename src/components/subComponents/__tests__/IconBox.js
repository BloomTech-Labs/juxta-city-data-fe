import React from "react";
import { render } from '@testing-library/react';
import IconBox from "../IconBox";

it(`renders "Find Ur place" heading`, async () => {
  const { getByText } = render(<IconBox />);
  const heading = await getByText(/"Find Ur" place/); 
  expect(heading).toBeInTheDocument();
})

