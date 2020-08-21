const handleInput = (key, setKey) =>{
    console.log("entered handle input here!", key, setKey)
    return function (e) { 
      setKey({...key, [e.target.name]: e.target.value})
    }
}
export {
    handleInput
};