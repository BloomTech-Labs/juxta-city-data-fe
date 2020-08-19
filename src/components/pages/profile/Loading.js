import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Loading= () => {
  return (
    <Segment style={{ marginTop: '200px' }}>
      <Dimmer active inverted>
        <Loader size='large'>Loading your information...</Loader>
      </Dimmer>
    </Segment>
  );
};

export default  Loading; 