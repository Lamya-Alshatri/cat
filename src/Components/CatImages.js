import React from 'react'
import axios from 'axios';
import {useState} from "react"


export default function CatImages(props) {

  const [CatIamge, setCatIamge] = useState()


  function handlebtn ()  {

    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      console.log(res.data[0].id)
      setCatIamge(res.data[0].url)
    })
    .catch(err => {
      console.error(err); 
    })
    }

  return (
    <div >
      <h1>Cat info here</h1>
     <div>
      <img style = {{width:"25%", margin:"5%", height:"auto"}}src= {CatIamge} >
      </img>
     </div>
     <button style={{margin:'10px'}}  onClick={handlebtn} > get info</button>
    </div>
  )
}
