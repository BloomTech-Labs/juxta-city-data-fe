import React from "react";
import "../../../index.scss";
import StateSelect from "./StateSelect";
import ZipCode from "./ZipCode";
import { Form, Card, Button } from "semantic-ui-react";


function ProfileInputs({ handleSubmit, addHandleChange }) {
  const inputData = [
    {
      name: "first_name",
      placeholder: "First Name",
      type: "text",
    },
    {
      name: "last_name",
      placeholder: "Last Name",
      type: "text",
    },
    {
      name: "dob",
      placeholder: "Date of birth",
      type: "date",
    },
    {
      name: "address",
      placeholder: "Address",
      type: "text",
    },
    {
      name: "city",
      placeholder: "City",
      type: "text",
    },
  ];

  return (
    <Card className="ui cards" style={{ padding: "20px", margin: "20px" }}>
      <Card.Content header="Complete profile information" />
      <Form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {inputData.map((item, index) => (
          <div key={index}>
            <Form.Field key={index}>
              <label className="form-label" htmlFor={item.name}>
                {item.placeholder}
              </label>
              <input
                data-testid={item.name}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                className="input"
                onChange={addHandleChange}
                aria-label={item.placeholder}
              />
            </Form.Field>
          </div>
        ))}
        <Form.Field>
          <label htmlFor="State">State</label>
          <StateSelect
            addHandleChange={addHandleChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="Zip Code">Zip Code</label>
          <ZipCode
            addHandleChange={addHandleChange}
          />
        </Form.Field>
        <div className="center">
          <Button
            type="submit"
            className="btn"
            data-testid="submit"
            style={{
              backgroundColor: "#0074cc",
              color: "white",
              width: "200px",
            }}
          >
            Add Profile
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default ProfileInputs;
