import React from "react";
import { render, fireEvent} from "@testing-library/react";
import SignInInputs from "../SignInInputs.js";


describe("<SignInInputs />", () => {
  const signInForm = {};
  const signInChange = jest.fn();
  const handleSubmit = jest.fn();

  it("renders without crashing", () => {
    render(<SignInInputs signInForm={signInForm} />);
  });

  it("renders the error and button", () => {
    const { getByText } = render(<SignInInputs signInForm={signInForm} />);
    expect(getByText(/Sorry User Not Found/i)).toBeInTheDocument();
    expect(getByText(/Submit/i)).toBeInTheDocument();
  });

  it("renders the username", () => {
    const { queryByPlaceholderText } = render(
      <SignInInputs signInChange={signInChange} signInForm={signInForm} />
    );
    const input = queryByPlaceholderText("Username");
    fireEvent.change(input, { target: { value: "Antonio123" } });

    expect(input.value).toBe("Antonio123");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "username");
  });

  it("renders the password", () => {
    const { queryByPlaceholderText } = render(
      <SignInInputs signInChange={signInChange} signInForm={signInForm} />
    );
    const input = queryByPlaceholderText("Password");
    fireEvent.change(input, { target: { value: "Antonio312" } });

    expect(input.value).toBe("Antonio312");
    expect(input).toHaveAttribute("type", "password");
    expect(input).toHaveAttribute("name", "password");
  });

  it('calls "handleSubmit" function on submit button click', () => {
    const { getByText } = render(
      <SignInInputs
        handleSubmit={handleSubmit}
        signInChange={signInChange}
        signInForm={signInForm}
      />
    );
    const submitButton = getByText(/submit/i);
    fireEvent.submit(submitButton);

    expect(submitButton).not.toBeDisabled();
    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
