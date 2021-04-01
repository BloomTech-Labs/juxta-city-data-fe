import React from "react";
import "../../../index.scss";
import StateSelect from "./StateSelect";
import ZipCode from "./ZipCode";
import Loading from "./Loading";
import { Form ,Card, Button} from "semantic-ui-react";
import {
  handleSubmitFocus,
  handleTextFocus
} from "./SVGfunctions"; 
import SVGstyle from './SVGstyle'


function EditProfileInputs({ handleSubmit, addHandleChange, userData }) {
  if (userData) {
    const inputData = [ {name: "first_name", placeholder: "First Name", value: userData.first_name,type: "text", "dataStrokedashoffset":"0"  },
      { name: "last_name", placeholder: "Last Name", value: userData.last_name,type: "text", "dataStrokedashoffset":"-331" },
      { name: "dob", placeholder: "Date of birth", value: userData.dob,type: "date", "dataStrokedashoffset":"-686"  },
      { name: "address", placeholder: "Address", value: userData.address,type: "text", "dataStrokedashoffset": "-1012"  },
      { name: "city", placeholder: "City", value: userData.city,type: "text", "dataStrokedashoffset":"-1367" }];
   
    return (
     
        <Card className="ui cards" style={{ padding: "20px", marginTop:'20px'}} >
          {/* <SVGstyle/> */}
          <Card.Content header='Edit profile information' />
          <Form 
          // style={{ position: "absolute", zIndex: 10, margin: "0 40px" }}
            noValidate autoComplete="off"  onSubmit={handleSubmit}>

            {inputData.map((item, index) => (
              <div key={index}>
                <Form.Field key={index}>
                <label htmlFor={item.name} > {item.placeholder} </label>
                
                <input
                  name={item.name} type={item.type}  placeholder={item.placeholder}
                  className="input" 
                  onChange={addHandleChange}  aria-label={item.placeholder} defaultValue={item.value}  />
              </Form.Field>
              </div>
            ))}
            <Form.Field>
            <label htmlFor="State">State</label>
            <StateSelect  addHandleChange={addHandleChange}  />
            </Form.Field>
            <Form.Field>
            <label htmlFor="Zip Code">Zip Code</label>
            <ZipCode  addHandleChange={addHandleChange}    />
            </Form.Field>
            <div className="center">
              <Button type="submit"   className="btn" style={{
            backgroundColor: '#0074cc',
            color: 'white',
            width: '200px',
          }} > Edit Profile  </Button>
            </div>
          </Form>
        </Card>
    
    );
  } else { 
 return (<Loading/>)
  }
}
export default EditProfileInputs;
