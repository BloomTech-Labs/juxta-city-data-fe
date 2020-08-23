import React from "react";
import AddProfile from "../AddProfile";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import nock from "nock";

const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImVtYWlsIjoiY29uYXJ5LmJlY2tmb3JkQGVtYWlsLmNvbSIsImlhdCI6MTUzOTQyMDA1Mn0.HAwkRBF5L_UAh7gaZrrRRm9mTx0BB89tIUNx5gX4X7U";

describe("bang", () => {
  let handleSubmit;
  let addHandleChange;
  beforeEach(() => {
    handleSubmit = jest.fn();
    addHandleChange = jest.fn();
    localStorage.setItem('token', JWT_TOKEN);
  });

  afterEach(() => {
    handleSubmit.mockReset();
    addHandleChange.mockReset();
  });

  it("", () => {
    const bang = render(
      <AddProfile profileData={[]} />
    );
    const firstNameInput = bang.getByTestId("fname");
    fireEvent.change(firstNameInput, { target: { value: "Conary" } });
    const lastNameInput = bang.getByTestId("lname");
    fireEvent.change(lastNameInput, { target: { value: "Beckford" } });
    
    expect(bang.getByText("Add Profile")).toBeVisible();
    bang.getByTestId("submit").click();
    nock("https://production-juxta-city-be.herokuapp.com/api", {
        reqheaders: {
            "Content-Type": "application/json",
            Authorization: JWT_TOKEN,
        },
    })
    .post("/profile/1", {
        first_name: "Conary",
        last_name: "Beckford",
        address: null,
        city: null,
        dob: null,
        state: null,
        zip: null,
        })
        .reply(200, {
        license: {
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz",
        },
    });
  });
});
