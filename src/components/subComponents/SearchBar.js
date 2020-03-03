import React, {useState, useEffect, useContext} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import CityContext from '../../contexts/CityContext.js';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const Search = styled.input`
postition: relative;
width: 450px;
height: 30px;
border: 0px;
font-size: 20px;
`
const Form = styled.form`
width: 620px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:center;
`
const Button = styled.button`
border: 0px;
background: white;
height: 30px;
`
const CityDropDown = styled.div`
z-index: 2;
`
const City = styled.p`
width: 487px;
line-height: 1;
font-size: 20px;
background: white;
margin: 0px;
background: whitesmoke;
border: 1px solid lightgrey;
:hover {
  background: lightgrey;
}
`

const SearchBar = props => {
const [search, setSearch]= useState("");
const [cities, setCities]= useState([]);
const {cityData, setCityData} = useContext(CityContext)
let history = useHistory();
useEffect(()=>{
  if(search.length < 2 || undefined){
    console.log("waiting")
    setCities([])
}else{
  console.log("searching")
  axios.get(`https://junta-test.herokuapp.com/search?search=${search}`).then(res => {
    setCities(res.data)
  })
}
}, [search])

const handleSubmit= e => {
  e.preventDefault()
  axios.get(`https://junta-test.herokuapp.com/data?city=${search}`).then(res => {
    setCityData(res.data);
    history.push('/dashboard')
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
        <Search type='string' name='city' value={search} onChange={handleChange} />
        <Button type='submit'><SearchIcon/></Button>
        <CityDropDown>
          {cities.length > 1 ? cities.splice(0,10).map(city => (
            <City onClick={()=>handleCityClick(city)}>{city}</City>
          )): <div></div>}
        </CityDropDown>    
      </Form>
  );
};
export default SearchBar;
