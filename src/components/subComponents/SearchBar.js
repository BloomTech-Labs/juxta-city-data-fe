import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import CityContext from '../../contexts/CityContext.js';
import styled from 'styled-components';

const Search = styled.input`
width: 600px;
height: 18px;
border: 0px
`
const Form = styled.form`
width: 900px;
background: lightgrey;
height: 220px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
z-index: 1;
align-items: center;
justify-content:center;
`
const Button = styled.button`
border: 0px;
background: white;
height: 20px;
`
const CityDropDown = styled.div`
  position: relative;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 2;
  background: white;
  top: 205px;
`
const City = styled.p`
width: 650px;
line-height: .75;
font-size: 14px;
background: white;
margin: none;
border-bottom: 1px solid grey;
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
  let arr = search.split("")
  arr[0] = arr[0].toUpperCase()
  let cityWithCaps = arr.join("")
  axios.get(`https://junta-test.herokuapp.com/search?search=${cityWithCaps}`).then(res => {
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
      <Form autoComplete='off' onSubmit={handleSubmit}>
        <Search type='string' name='city' value={search} onChange={handleChange} />
        <Button type='submit'>Search</Button>
        <CityDropDown>
          {cities.splice(0,10).map(city => (
            <City onClick={()=>handleCityClick(city)}>{city}</City>
          ))}
        </CityDropDown>
        
      </Form>
  );
};
export default SearchBar;
