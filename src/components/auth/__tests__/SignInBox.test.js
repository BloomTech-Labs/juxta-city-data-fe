import React from "react";
import { render } from "@testing-library/react";
import SignInBox from "../SignInBox.js";

describe("<SignInBox />", () => {
  const signInForm = {
    username: "test",
    password: "test",
  };
  it("renders without crashing", () => {
    render(<SignInBox signInForm={signInForm} />);
  });

  it('renders the "sign in" header', () => {
    const { getByText } = render(<SignInBox signInForm={signInForm} />);
    expect(getByText(/sign in/i)).toBeInTheDocument();
  });
});

