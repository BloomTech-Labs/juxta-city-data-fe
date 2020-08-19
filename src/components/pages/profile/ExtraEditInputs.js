import React from "react";
// import SelectState from "./SelectState";
import { Form, Button } from "semantic-ui-react";

function ExtraEditInputs({ handleSubmit, addHandleChange, userData }) {
  if (userData) {
    const inputData = [
      {
        type: "text",
        name: "first_name",
        value: userData.first_name,
        placeholder: "First Name",
      },
      {
        type: "text",
        name: "last_name",
        value: userData.last_name,
        placeholder: "Last Name",
      },
      {
        type: "date",
        name: "dob",
        value: userData.dob,
        placeholder: "Birthdate",
      },
      {
        type: "text",
        name: "address",
        value: userData.address,
        placeholder: "Address",
      },
      { type: "text", name: "city", value: userData.city, placeholder: "City" },
      {
        type: "number",
        name: "zip",
        value: userData.zip,
        placeholder: "Zip code",
      },
    ];

    return (
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <h1>Edit your profile</h1>
        <div className="extra-profile">
          <Form onSubmit={handleSubmit} size="big">
            {inputData.map((item, index) => (
              <Form.Field>
                <input
                  defaultValue={item.value}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  aria-label={item.placeholder}
                  onChange={addHandleChange}
                />
              </Form.Field>
            ))}
            {/* <Form.Field> <input type="text" defaultValue={userData.first_name}  aria-label="First Name" placeholder="First Name" name="first_name" onChange={addHandleChange} /> </Form.Field>
                    <Form.Field> <input type="text" defaultValue={userData.last_name} aria-label="Last Name" placeholder="Last Name" name="last_name" onChange={addHandleChange}/> </Form.Field>
                    <Form.Field> <input type="date"  aria-label="Birthdate" placeholder="Birthdate" name="dob" defaultValue={userData.dob} onChange={addHandleChange}  /> </Form.Field>
                    <Form.Field> <input type="text"  aria-label="Address" placeholder="Address" name="address" defaultValue={userData.address} onChange={addHandleChange}  /></Form.Field>
                    <Form.Field> <input type="text" aria-label="City" placeholder="City" name="city" defaultValue={userData.city} onChange={addHandleChange} /> </Form.Field>
                    <Form.Field><input type="number" aria-label="Zip code"  placeholder="Zip code" name="zip" defaultValue={userData.zip} onChange={addHandleChange}/> </Form.Field>                  */}
            <Button
              type="submit"
              aria-hidden="false"
              style={{ backgroundColor: "#0074cc", color: "white" }}
            >
              Save changes
            </Button>
          </Form>
        </div>
      </div>
    );
  } else {
    return <h1>loading profile data...</h1>;
  }
}
export default ExtraEditInputs;
