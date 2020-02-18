import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext.js';

export default function LandingPage(props){
    const user = useContext(UserContext)
    return (
        <div>LandingPage</div>
    )
}