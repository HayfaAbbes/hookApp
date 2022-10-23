import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handletext,rating,handleRating}) => {
  return (
    <div className='header-container'>
    <h1>Our movies app</h1>
    <div className='search-container'>
        <input 
        className='inp' type="text"
         value={text} onChange={handletext} 
         placeholder="Enter a movie to search.."/>
        <StarRating rating={rating} handleRating={handleRating}/>
        
    </div>

    </div>
  )
}

export default Search