import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

const Health = props => (
  <div id='box-container'>
    <Header as='h2' id={props.title.trim()}>
      Health Data
      <Header.Subheader>
        Take a look at our interactive map on heart disease by United States
        county
      </Header.Subheader>
      <br/>
      <Button
        aria-hidden='false'
        style={{ backgroundColor: '#0074cc', color: 'white' }}
        as='a'
        target='blank'
        href='https://dash-heartandcovid.herokuapp.com/'
      >
        View Map
        <Icon name='long arrow alternate right' aria-hidden='false' />
      </Button>
    </Header>
  </div>
);

export default Health;
