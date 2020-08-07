// import React from "react";
// import SignUpInputs from "./SignUpInputs";

// import { Card, Image } from "semantic-ui-react";
// import { Header } from "semantic-ui-react";
// import newlogo from "../../assets/newlogo.png";

// const SignUpBox = ({ signUpChange, handleSubmit, form }) => {
//   return (
//     <Card className="ui centered cards" style={{ padding: "20px" }}>
//       <Image src={newlogo} alt="findur newlogo" />
//       <Header className="ui icon header" as="h1">
//         Sign Up
//       </Header>
//       <SignUpInputs
//         signUpChange={signUpChange}
//         handleSubmit={handleSubmit}
//         form={form}
//       />
      
//     </Card>
//   );
// };

// export default SignUpBox;
import React from "react";
import { styles } from "./authStlyes";
import SignUpInputs from "./SignUpInputs";

const SignUpBox = ({ signUpChange, handleSubmit, form }) => {
  const classes = styles();
  return (
    <div className={classes.box} style={{ background: "#2196F3" }}>
      <h3 className={classes.h3}>Sign Up</h3>
      <SignUpInputs
        signUpChange={signUpChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </div>
  );
};

export default SignUpBox;
