import React from 'react';
import {Loader, Segment } from 'semantic-ui-react';

const Loading= () => {
  return (
    <Segment style={{ marginTop: '20px' }}>
        <Loader  active inline='centered' size='large'>Loading your information...</Loader>
    </Segment>
  );
};

export default  Loading; 