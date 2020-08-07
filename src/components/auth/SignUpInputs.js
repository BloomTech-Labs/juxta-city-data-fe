// import React  from "react";
// import { styles } from "./authStlyes";

// const SignUpInputs =({signUpChange, handleSubmit, form}) => {
//     const classes = styles();

//     return (
//         <form onSubmit={handleSubmit} className={classes.form}>
//             <p id="error-message" style={{ display: "none", color: "red" }}>
//             **The username and email must be unique** </p>
//             <input type="text" name="username" placeholder="Username (required)"
//                 value={form.username} className={classes.inputs}  onChange= {(event)=> signUpChange(event)} required
//             />
//             <input type="email" name="email" placeholder="Email (required)"
//                 value={form.email} className={classes.inputs}  onChange= {(event)=> signUpChange(event)} required
//             />
//             <input type="password" name="password" placeholder="Password (required)"
//                 value={form.password} className={classes.inputs}  onChange= {(event)=> signUpChange(event)} required
//             />
//             <button className={classes.submit} style={{ background: "#8BC34A" }}>
//                 Submit </button>
//         </form>
//     )
// }
// export default SignUpInputs;

import React from "react";
import { Button, Form,  Icon } from "semantic-ui-react";


const SignUpInputs = ({ signUpChange, handleSubmit, form }) => {
  const commomProps = {
    onChange: signUpChange,
  };
  return (
    <Form onSubmit={handleSubmit}>
    
        
      
      <p id="error-message" style={{ display: "none", color: "red" }}>
        **The username and email must be unique**{" "}
      </p>
      <Form.Field>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          {...commomProps}
          required
          variant="outlined"
        />
      </Form.Field>
      <Form.Field>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          {...commomProps}
          required
          variant="outlined"
        />
      </Form.Field>
      <Form.Field>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          {...commomProps}
          required
          variant="outlined"
        />
      </Form.Field>
      <Button
        style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }}
      >
        Submit <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};
export default SignUpInputs;
