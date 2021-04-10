import React from 'react'
import axios from 'axios'
import Movie from '../components/Movie'
import "./Home.css"
import './loading_icon.css';
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    }

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <div class="loadingio-spinner-spin-8vfsm2ltrnr"><div class="ldio-5mhk44i8zo3">
                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                        </div></div>
                        <div className="loader_text">Loading...</div>
                    </div>
                ) : (   
                        <div className="home">
                            <h1 id="head">Movies</h1>
                            <div className="movies">
                                {movies.map(movie => (
                                    <Movie key={movie.id} {...movie} />))}
                            </div>
                        </div>
                    )}
            </section>
        )
    }
}

export default Home;
