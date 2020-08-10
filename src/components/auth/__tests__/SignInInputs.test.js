import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignInInputs from "../SignInInputs.js";
import ModalContext from "../../../contexts/ModalContext";

describe("<SignInInputs />", () => {
  const signInForm = {};
  const signInChange = jest.fn();
  const handleSubmit = jest.fn();

  it("renders without crashing", () => {
    const modal = "";
    render(
      <ModalContext.Provider value={{ modal }}>
        <SignInInputs signInForm={signInForm} />
      </ModalContext.Provider>
    );
  });

  it("renders the error and button", () => {
    const modal = "";
    const { getByText } = render(
      <ModalContext.Provider value={{ modal }}>
        <SignInInputs signInForm={signInForm} />
      </ModalContext.Provider>
    );
    expect(getByText(/Sorry User Not Found/i)).toBeInTheDocument();
    expect(getByText(/Sign In/i)).toBeInTheDocument();
  });

  it("renders the username", () => {
    const modal = "";
    const { queryByPlaceholderText } = render(
      <ModalContext.Provider value={{ modal }}>
        <SignInInputs signInForm={signInForm} signInChange={signInChange}/>
      </ModalContext.Provider>
    );
    const input = queryByPlaceholderText("username");
    fireEvent.change(input, { target: { value: "Antonio123" } });

    expect(input.value).toBe("Antonio123");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "username");
  });

  it("renders the password", () => {
    const modal = "";
    const { queryByPlaceholderText } = render(
      <ModalContext.Provider value={{ modal }}>
        <SignInInputs signInForm={signInForm} signInChange={signInChange}/>
      </ModalContext.Provider>
    );
    const input = queryByPlaceholderText("password");
    fireEvent.change(input, { target: { value: "Antonio312" } });

    expect(input.value).toBe("Antonio312");
    expect(input).toHaveAttribute("type", "password");
    expect(input).toHaveAttribute("name", "password");
  });

  it('calls "handleSubmit" function on submit button click', () => {
    const modal = "";
    const { getByText } = render(
    <ModalContext.Provider value={{ modal }}>
        <SignInInputs   handleSubmit={handleSubmit}
        signInChange={signInChange}
        signInForm={signInForm}/>
      </ModalContext.Provider>
    );
    const submitButton = getByText(/Sign In/i);
    fireEvent.submit(submitButton);

    expect(submitButton).not.toBeDisabled();
    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
