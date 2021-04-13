import React from 'react';
import axios from 'axios';
import './Search.css';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Movies from '../components/Movies';
import SearchForm from '../components/SearchForm';


class Search extends React.Component {
    state = {
        isLoading: true,
        movies: [],
        value: "",
        isError: false
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
            this.setState({ isError: true });
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
        const { movies, isLoading, isError } = this.state;

        return (<section className="container">
            { isError ? (
                <div className="error-page">
                    <Error />
                </div>
            ) : (isLoading ?
                (<div className="loader">
                    <Loading />
                </div>
                ) : (<div className="search-result">
                        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} />
                        <div className="movies">
                            <Movies movies={movies} />
                        </div>
                    </div>
                )                       
            )
        }
        </section>);
    }
}

export default Search;
