import React from 'react';
import Movie from './Movie';
import './Movies.css';

const Movies = ({ movies }) => {
    if (movies === undefined) {
        return <div className="no_result">검색 결과가 없습니다.</div>
    }
    return <div className="movies">
        {movies.map(movie => (
            <Movie {...movie} key={movie.link} />))
        }
    </div>
}

export default Movies;