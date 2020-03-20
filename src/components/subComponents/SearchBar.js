import React, {useState, useEffect, useContext} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import CityContext from '../../contexts/CityContext.js';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const Search = styled.input`
position: relative;
width: 58%;
height: 30px;
border: 0px;
font-size: 19px;
@media screen and (max-width: 600px){
  width: 84%
}
`
const Form = styled.form`
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:center;
`
const Button = styled.button`
border: 0px;
background: white;
width: 45px;
height: 30px;
background: #8BC34A;
color: white;
display: flex;
justify-content: center;
:hover {
  border: 1px solid white;
}
`

const CityDropDown = styled.div`
z-index: 2;
width: 58%;
margin-right: 45px;
@media screen and (max-width: 600px){
  width: 84%
}
`
const City = styled.p`
line-height: 1.5;
font-size: 19px;
margin: 0px;

background: white;
background: whitesmoke;
:hover {
  background: #BBDEFB;
}
`

const SearchBar = props => {
  const [search, setSearch]= useState("");
  const [cities, setCities]= useState([]);
  const {cityData, setCityData} = useContext(CityContext)
  let history = useHistory();

  useEffect(()=>{
    if(search.length < 3 || undefined){
      setCities([])
    } else {
      axios.get(`https://junta-test.herokuapp.com/search?search=${search}`)
        .then(res => {
          setCities(res.data)
        })
    }
  }, [search])

  const handleSubmit= e => {
    e.preventDefault()
    axios.get(`https://junta-test.herokuapp.com/data?city=${search}`)
      .then(res => {
        setCityData(res.data);
        history.push('/cityview')
      })
  }

  const handleChange= e => {
    setSearch(e.target.value)
  }

  const handleCityClick=(city)=>{
    setSearch(city);
  }

  return (
      <Form autoComplete='off' onSubmit={handleSubmit}>
        <Search
          type='text'
          name='city' 
          value={search} 
          placeholder='Search for a City'
          onChange={handleChange}
        />
        <Button type='submit'>
          <SearchIcon/>
        </Button>
        <CityDropDown>
          {cities.length === 0 && search !== "" && search.split("").length > 2
            ? <City>No Matches Found...</City> 
            : cities.splice(0,4).map((city,idx) => (
              <City key={idx} onClick={()=>handleCityClick(city)}>{city}</City>
            ))
          }
        </CityDropDown>    
      </Form>
  );
};

export default SearchBar;
