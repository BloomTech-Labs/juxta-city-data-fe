import React, { useState } from "react"
import axios from "axios"
import jwt_decode from 'jwt-decode';

function ImageUpload() {
    const [file, setFile] = useState('')
    const [imageUpload, setImageUpload] = useState({})

    const token = localStorage.getItem("token");
    console.log(token, "Is the token there?")
    const userId = jwt_decode(token).userid;

    const handleChange = e => {
      setFile(e.target.files[0])
    }
    

    const handleSubmit = e => {
        e.preventDefault()
        console.log("did handle submit make it this far?")
        const formData = new FormData()
        formData.append("image", file)
        axios.put(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}/profile_image`, formData).then(res => {
          setImageUpload(res.data)
          console.log(imageUpload, "Did Image set?")
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/x-png, image/jpeg" onChange={handleChange}/>
                <input type="submit" value="Upload" />
            </form>
            {imageUpload? (
        <div>
          <img src={imageUpload.image_url} alt='' />
        </div>
      ) : null}
        </div>
    )
}

export default ImageUpload;