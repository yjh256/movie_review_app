﻿import React from 'react';
import axios from 'axios';
import './Home.css';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Movies from '../components/Movies';
import SearchForm from '../components/SearchForm';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
        value: "",
        isError: false
    };

    getSearchMovie = async () => {
        const ID_KEY = 'rqrSvoQGkSvTUJp0yaQC';
        const SECRET_KEY = 'SkksIxbjKL'
        const search = this.state.value;
        try {
            if (search === "") {
                this.setState({ movies: [], isLoading: false })
            } else {
                const { data: { items } } = await axios.get('/v1/search/movie.json', {
                    params: {
                        query: search,
                        display: 20
                    },
                    headers: {
                        'X-Naver-Client-Id': ID_KEY,
                        'X-Naver-Client-Secret': SECRET_KEY
                    }
                });

                this.setState({ movies: items, isLoading: false })
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
        return (
            <section className="container">
                <h1 id="head">환영합니다!</h1>
                <h4 id="subhead">영화를 검색해 보세요!</h4>
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
                        <Movies movies={movies} />
                    </div>
                    )
                    )
                }
            </section>
        )
    }
}

export default Home;
