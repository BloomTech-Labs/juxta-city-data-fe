import React, {useState, useEffect} from "react";
import axios from 'axios';

const SearchBar = props => {
const [search, setSearch]= useState("");
const [cities, setCities]= useState([]);
const handleSubmit= e => {
  e.preventDefault()

  }
const handleChange= e => {
  setSearch(e.target.value)
  if(search.length < 3 || undefined){
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
}

const handleCityClick=(city)=>{
console.log(city)
setSearch(city);
}

  return (
    <div>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <input type='string' name='city' value={search} onChange={handleChange} />
        <button type='submit'>Submit</button>
        {cities.splice(0,10).map(city => (
          <p onClick={()=>handleCityClick(city)}>{city}</p>
        ))}
      </form>
    </div>
  );
};
export default SearchBar;
