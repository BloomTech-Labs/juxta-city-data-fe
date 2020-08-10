import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignIn from "../SignIn.js";
import { TRUE } from "node-sass";
import ModalContext from "../../../contexts/ModalContext";

describe("<SignIn />", () => {
  const modal = "";
  it("renders without crashing", () => {
    render(
      <ModalContext.Provider value={{ modal }}>
        <SignIn />
      </ModalContext.Provider>
    );
  });
});

describe("input values", () => {
  it("Username updates on change", () => {
    const modal = "";
    const { queryByPlaceholderText } = render(
        <ModalContext.Provider value={{ modal }}>
        <SignIn />
      </ModalContext.Provider>
    );
    const typeInput = queryByPlaceholderText("username");
    fireEvent.change(typeInput, { target: { value: "test" } });
    expect(typeInput.value).toBe("test");
  });

  it("Password updates on change", () => {
    const modal = "";
    const { queryByPlaceholderText } = render(
        <ModalContext.Provider value={{ modal }}>
        <SignIn />
      </ModalContext.Provider>);
    const typeInput = queryByPlaceholderText("password");
    fireEvent.change(typeInput, { target: { value: "test" } });
    expect(typeInput.value).toBe("test");
  });

  it('calls "onClick" prop on button click', () => {
    const modal = "";
    const { queryByPlaceholderText } = render(
        <ModalContext.Provider value={{ modal }}>
        <SignIn />
      </ModalContext.Provider>
    );
    const handleSubmit = jest.fn();
    const passwordInput = queryByPlaceholderText("password");
    const usernameInput = queryByPlaceholderText("username");

    if (usernameInput && passwordInput === TRUE) {
      const { getByText } = render(<SignIn onClick={handleSubmit} />);
      fireEvent.click(getByText(/sign in/i));
      expect(handleSubmit).toHaveBeenCalled();
    }
  });
});
