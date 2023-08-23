import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  
  const [ search, setSearch]= useState('')
  const [res, setRes]= useState([])


  const onChange=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=d4140941`)
  .then((response)=>{
    setRes(response.data.Search || [])
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


      console.log(search)
      setSearch('')
  }

   const addToFavorites = (postdata) => {
    
  
     axios.post("http://localhost:5000/api/favorite",postdata)
        .then(response => {
          const newFavorite = response;
          console.log(newFavorite)
          toast.success("Added to ❤️")
        })
        .catch(error => {
          console.error(error);
          toast.error('Somthing is wrong')
        
        })

    };

  return (
    <div>
      <h1 className='p-2'>Home</h1>
      <div className='search p-4'>
      <form onSubmit={onSubmit}> 
      <input type='text' onChange={onChange} placeholder='write a movie name' value={search} className='p-2' ></input>
      <Button variant="primary" type='submit' className='p-2 mx-1'>Search</Button>
      </form>
      </div>
      <div className='main_container'>
      {res.length<=0 ? <h1 className='p-2'>Search Somthing</h1>  :
    
      <div className="row row-cols-1 row-cols-md-3 g-4">

          {res.map(result => (
            <div className="card " key={result.imdbID}>
              <img src={result.Poster} className="card-img-top" alt={result.Title}/>
              <div className="card-body">
                <h5 className="card-title">{result.Title}</h5>
                <p className="card-text">{result.Year}</p>
              </div>
              <div className="card-footer">
                <Button variant="primary" onClick={()=>{ addToFavorites(result)}}>Add to ❤️</Button>
              </div>
              
            </div>
            ))}
        </div>
}
 </div>
 <ToastContainer />
</div>
  )
}

export default Home