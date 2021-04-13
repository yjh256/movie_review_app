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
        const SERVICE_KEY = 'N971848DE614S7CF3946';
        try {
            const { data: { Data } } = await axios.get('http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp', {
                params: {
                    collection: 'kmdb_new2',
                    ServiceKey: SERVICE_KEY
                }
            });
            const movies = Data[0].Result;
            this.setState({ movies, isLoading: false })

        } catch (error) {
            console.log(error);
        }
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
                        <div className="loadingio-spinner-spin-8vfsm2ltrnr"><div className="ldio-5mhk44i8zo3">
                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                        </div></div>
                        <div className="loader_text">Loading...</div>
                    </div>
                ) : (   
                        <div className="home">
                            <h1 id="head">Movies</h1>
                            <div className="movies">
                                {movies.map((movie, i) => (
                                    <Movie key={movie.movieSeq} {...movie} />))
                                }
                            </div>
                        </div>
                    )}
            </section>
        )
    }
}

export default Home;
