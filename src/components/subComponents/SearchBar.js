import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import CityContext from '../../contexts/CityContext.js';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = styled.input`
width: 450px;
height: 30px;
border: 0px;
font-size: 20px;
`
const Form = styled.form`
width: 620px;
background: grey;
height: 93px;
margin: 0 auto;
display: flex;
z-index: 1;
align-items: center;
justify-content:center;
`
const Button = styled.button`
border: 0px;
background: white;
height: 30px;
`
const CityDropDown = styled.div`
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 2;
  background: white;
  top: 255px;
`
const City = styled.p`
width: 450px;
line-height: 1;
font-size: 20px;
background: white;
margin: 0px;
border: 1px solid whitesmoke;
:hover {
  background: lightgrey;
}
`

const SearchBar = props => {
const [search, setSearch]= useState("");
const [cities, setCities]= useState([]);
const {cityData, setCityData} = useContext(CityContext)
console.log("Context",cityData)

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
  })
  }
const handleChange= e => {
  setSearch(e.target.value)
}

const handleCityClick=(city)=>{
console.log(city)
setSearch(city);
}

  return (
    <div>
      <Form autoComplete='off' onSubmit={handleSubmit}>
        <Search type='string' name='city' value={search} onChange={handleChange} />
        <Button type='submit'><SearchIcon/></Button>
        <CityDropDown>
          {cities.length > 1 ? cities.splice(0,6).map(city => (
            <City onClick={()=>handleCityClick(city)}>{city}</City>
          )): <div></div>}
        </CityDropDown>
      </Form>
      <Autocomplete
        options={cities}
        style={{width: 300}}
        renderInput={params => <TextField {...params} label='search for city' variant='outlined'/>}
      />
    </div>
      
  );
};
export default SearchBar;
