import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='Movie-List'>
        {
            movies.map(el=>
                <MovieCard movies={el} />
                )
        }
      </div>


  )
}

export default MovieList