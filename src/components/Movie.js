import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Movie.css";

const Movie = ({ id, year, title, summary, medium_cover_image, genres }) => {
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: { year, title, summary, genres, medium_cover_image }
        }} style={{ textDecoration: 'none'}}>
            <div className="movie">
                <img src={medium_cover_image} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">{genres.map((genre, i) =>
                        <li key={i} className="genres__genre">{genre}</li>
                    )}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;