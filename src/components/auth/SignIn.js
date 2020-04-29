import React, { useState } from "react";
import axios from 'axios';
import {styles} from './authStlyes';
import {createUserContext} from '../../functions';


export default function SignIn(props){
  const [form, setForm] = useState({})
  const classes = styles();
  const handleChange = e => {
    setForm({...form, [e.target.name] : e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form)
    axios.post('https://production-juxta-city-be.herokuapp.com/api/auth/signin', form).then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        createUserContext().then(res => {
          console.log(res)
        })
    }).catch(err => {console.log(err)})
  }
  return (
    <div className={classes.box} style={{background: '#8BC34A', borderRadius: '0% 5% 5% 0%'}}>
      <h3 className={classes.h3} style={{color: 'white'}}>Sign In</h3>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input className={classes.inputs} type="text" id="username2" name="username" placeholder='username' value={form.username} onChange={handleChange} required/>
        <input className={classes.inputs} type="password" id="password2" name="password" placeholder='password' value={form.password} onChange={handleChange} required/>
        <button className={classes.submit} style={{background: '#2196F3'}}>Submit</button>
      </form>
    </div>
  )
}