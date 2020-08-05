import React from 'react';
import { List } from 'semantic-ui-react';

const Health = props => (
  <List size='huge' id='box-container' >
    <List.Item id={props.title.trim()}>
      <h2>Health Data</h2>
      <List.Description>
        <a target='blank' href='https://findyourcity.herokuapp.com'>
          Click here{' '}
        </a>
        for an interactive map on heart disease
      </List.Description>
    </List.Item>
  </List>
);

export default Health;
