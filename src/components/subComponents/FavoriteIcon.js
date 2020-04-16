import React, {useContext, useState, useEffect} from 'react';
import emptyheart from '../../assets/emptyheart.png'
import fullheart from '../../assets/fullheart.png'
import UserContext from '../../contexts/UserContext';
import {addFavorite , removeFavorite} from '../../functions';

export default function FavoriteIcon(props){
    const [favorited, setFavorited] = useState(false)
    const {userData} = useContext(UserContext)
    useEffect(()=>{
        userData.favorites.includes(props.cityData)? setFavorited(true): setFavorited(false)
    }, [])
    const handleClick = e => {
        e.preventDefault();
        if(favorited && userData.id){
            removeFavorite(userData.id, props.cityData.id)
            setFavorited(false)
        }else if (!favorited && userData.id){
            addFavorite(userData.id, props.cityData.id)
            setFavorited(true)
        }else{
            props.history.replace('/signin')
        }
    }
    return (
        <img className={props.class} src={favorited ? fullheart: emptyheart} onClick={handleClick}/>
    )
}