import React from 'react';
import SearchBar from '../subComponents/SearchBar';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function ExploreCity() {
  const history = useHistory();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '100px', marginTop: '2rem', border:"1px solid gray"}}>
      <h1 style={{ textAlign: 'center' }}>Search for a city</h1>
      <SearchBar />
      <br />
      <h1 style={{ textAlign: 'center' }}>
        Or take our Survey to get recommendations!
      </h1>
      <Button
        onClick={() => history.push('/survey')}
        alt='Take the survey button'
        style={{ backgroundColor: '#0074cc', color: 'white',  width: '200px',  marginLeft: '37%'}}
      >
        Take the survey
      </Button>
    </div>
  );
}
