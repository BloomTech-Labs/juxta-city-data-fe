import React from "react";
import IconBox from "./subComponents/IconBox";
import Liveability from "./subComponents/Liveability";
import CallToAction from "./subComponents/CallToAction";
import {Container} from '@material-ui/core';
const MarketingBox = props => {
  return (
    <Container>
      <IconBox id='about'/>
      <Liveability />
      <CallToAction />
    </Container>
    
  );
};
export default MarketingBox;

// IconBox
// Liveability
// Call to action
