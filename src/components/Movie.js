import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Movie.css";

const Movie = (props) => {
    const editTitle = (title) => {
        return title
            .replace("</b>", "")
            .replace("<b>", "")
            .replace("&amp;", "&");
    };
    const editDirector = (director) => {
        const directors = director.split("|");
        return directors[0];
    }
    const editActor = (actor) => {
        const actors = actor.split("|");
        actors.splice(Math.min(actors.length - 1, 4));
        if (actors.length == 0) {
            return "" 
        }
        return actors.join(", ");
    }
    return (
        <Link to={{
            pathname: `/movie/${props.link}`,
            state: {...props, title: editTitle(props.title), director: editDirector(props.director), actor: editActor(props.actor)}
        }} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="movie">
                <img src={props.image} onError={(e) => {
                    e.target.src =  process.env.PUBLIC_URL + "/images/no-image-icon-0.jpg"; e.target.onError = null}} alt={props.title} title={props.title} />
                <div className="movie__data">
                    <h3 className="movie__title">{editTitle(props.title)}</h3>
                    <h5 className="movie__year">{props.pubDate}</h5>
                    <div className="movie__directors">감독 : {editDirector(props.director)}</div>
                    <div className="movie__actors">배우 : {editActor(props.actor)}</div>
                    <div className="movie__rating">평점 : {props.userRating} / 10.0</div>
                </div>
            </div>
        </Link>
    );
}

export default Movie;