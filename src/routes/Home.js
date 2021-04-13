import React from 'react'
import axios from 'axios'
import "./Home.css"
import Movies from '../components/Movies';
import Loading from '../components/Loading';
import Error from '../components/Error';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
        isError: false
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
            this.setState({ movies, isLoading: false });

        } catch (error) {
            this.setState({ isError: true });
            console.log(error);
        }
    }

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies, isError } = this.state;
        return (
            <section className="container">
                {isError ? (
                    <div className="error-page">
                        <Error />
                    </div>
                ) : (isLoading ? (
                        <div className="loader_page" >
                            <Loading />
                        </div>
                    ) : (
                        <div className="home">
                            <h1 id="head">Movies</h1>
                            <Movies movies={movies} />
                        </div>
                    )
                )}
            </section>
        )
    }
}

export default Home;
