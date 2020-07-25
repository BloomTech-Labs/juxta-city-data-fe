import React from "react";
import { render } from "@testing-library/react";
import SignUpBox from "../SignUpBox.js";

describe("<SignUpBox />", () => {
  const form = {
    username: "test",
    password: "test",
    email: "test@email.com",
  };
  
  it("renders without crashing", () => {
    render(<SignUpBox form={form} />);
  });

  it('renders the "sign up" header', () => {
    const { getByText } = render(<SignUpBox form={form} />);
    expect(getByText(/sign up/i)).toBeInTheDocument();
  });
});