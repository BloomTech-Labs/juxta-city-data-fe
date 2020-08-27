import React from "react";
import { Dimmer, Segment, Loader } from "semantic-ui-react";

const Loading = () => {
  return (
    <Dimmer active>
      <Loader />
    </Dimmer>
  );
};

export default Loading;
