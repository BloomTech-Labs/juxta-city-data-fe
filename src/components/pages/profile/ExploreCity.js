import React from 'react';
import SearchBar from '../../subComponents/SearchBar';
import { Button, Card } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function ExploreCity() {
  const history = useHistory();
  return (
    <Card fluid style={{ textAlign: 'center', padding:'40px 0'}}>
      <Card.Content>
        <Card.Header as='h1'>Search for a city</Card.Header>
        <SearchBar /> 
        <br></br>
        <Card.Header as='h1' style={{  marginTop:'40px'}}>
          Or take our Survey to get recommendations!
        </Card.Header>
        <Button onClick={() => history.push('/survey')}  alt='Take the survey button'
          style={{
            backgroundColor: '#0074cc',
            color: 'white',
            width: '200px',
          }}
        >
          Take the survey
        </Button>
      </Card.Content>
    </Card>
  );
}