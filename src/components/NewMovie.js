import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Movie.css";

const NewMovie = ({ movieSeq, prodYear, title, plots, posters, genre }) => {
    return (
        <Link to={{
            pathname: `/movie/${movieSeq}`,
            state: { prodYear, title, plots, posters, genre }
        }} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="movie">
                <img src={posters.split('|')[0]} onError={(e) => {
                    console.log('error!'); e.target.src = "/images/no-image-icon-0.jpg"; e.target.onError = null}} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{prodYear}</h5>
                    <div className="movie__genres">{genre}
                    </div>
                    <p className="movie__summary">{plots.plot[0].plotText.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
    );
}

NewMovie.propTypes = {
    movieSeq: PropTypes.string.isRequired,
    prodYear: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    posters: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
}

export default NewMovie;