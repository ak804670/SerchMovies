import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Favorite = () => {

  const [fav,setFev]= useState([])

  useEffect(()=>{

    axios.get("http://localhost:5000/api/favorite")
        .then(response => {
          setFev(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        })
  },[])



 return (
<div className="row row-cols-1 row-cols-md-3 g-4">

  {fav.map(result => (
    <div className="card ">
      <img src={result.Poster} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{result.Title}</h5>
        <p className="card-text">{result.Year}</p>
      </div>
        
    </div>
    ))}

</div>

)
}

export default Favorite