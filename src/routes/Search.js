import React from 'react';
import axios from 'axios';
import NewMovie from '../components/NewMovie'
import './Search.css';

class Search extends React.Component {
    state = {
        isLoading: true,
        movies: [],
        value: ""
    };

    getSearchMovie = async () => {
        const SERVICE_KEY = 'N971848DE614S7CF3946';
        const search = this.state.value;
        try {
            if (search === "") {
                this.setState({ movies: [], isLoading: false })
            } else {
                const { data: { Data }} = await axios.get('http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp', {
                    params: {
                        collection: 'kmdb_new2',
                        ServiceKey: SERVICE_KEY,
                        query: search,
                    }
                });
                const movies = Data[0].Result;
                this.setState({ movies, isLoading: false })
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getSearchMovie();
    };

    handleChange = (e: any) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.getSearchMovie();
    }

    render() {
        const { movies, isLoading } = this.state;

        return (<section className="container">
            {
                isLoading ?
                    (<div className="loader">
                        <div className="loadingio-spinner-spin-8vfsm2ltrnr"><div className="ldio-5mhk44i8zo3">
                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                        </div></div>
                        <div className="loader_text">Loading...</div>
                    </div>
            ) : (<form onSubmit={this.handleSubmit}>
                <div>
                    <div className="input_div">
                        <h1>영화 검색</h1>
                        <img src="/images/no-image-icon-0.jpg" alt="test"/>
                        <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화 검색" />
                    </div>
                    <div className="movies">
                                {movies.map((movie, i) => (
                                    <NewMovie key={movie.movieSeq} {...movie} />))
                        }
                    </div>
                </div>
            </form>)
            }
        </section>);
    }
}

export default Search;
