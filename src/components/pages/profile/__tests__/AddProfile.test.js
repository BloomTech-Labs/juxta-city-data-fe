import React from "react";
import mockAxios from "axios";
import AddProfile from "../AddProfile";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImVtYWlsIjoiY29uYXJ5LmJlY2tmb3JkQGVtYWlsLmNvbSIsImlhdCI6MTUzOTQyMDA1Mn0.HAwkRBF5L_UAh7gaZrrRRm9mTx0BB89tIUNx5gX4X7U";

describe("bang", () => {
  beforeAll(() => {
    localStorage.setItem('token', JWT_TOKEN);
  });

  afterAll(() => {
    localStorage.removeItem('token');
  });

  it("submits the form", () => {
      mockAxios.create.mockImplementationOnce(() => ({
        post: jest.fn(() =>
          Promise.resolve({
            data: {
              first_name: "Conary",
              last_name: "Beckford",
              address: null,
              city: null,
              dob: null,
              state: 'Ohio',
              zip: 78906,
            },
          })
        ),
      }));
    const bang = render(
      <AddProfile profileData={[]} />
    );
    const firstNameInput = bang.getByTestId("first_name");
    fireEvent.change(firstNameInput, { target: { value: "Conary" } });
    const lastNameInput = bang.getByTestId("last_name");
    fireEvent.change(lastNameInput, { target: { value: "Beckford" } });
    
    expect(bang.getByText("Add Profile")).toBeVisible();
    bang.getByTestId("submit").click();
    expect(mockAxios.create).toHaveBeenCalledTimes(1);
    expect(mockAxios.create.mock.results[0].value.post).toHaveBeenCalledTimes(
      1
    );
    expect(mockAxios.create.mock.results[0].value.post).toHaveBeenCalledWith(
      "https://production-juxta-city-be.herokuapp.com/api/profile/1",
      {
        first_name: "Conary",
        last_name: "Beckford",
        address: null,
        city: null,
        dob: null,
        state: null,
        zip: null,
      }
    );
  });
});
