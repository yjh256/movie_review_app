import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Search from './routes/Search';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import "./App.css";

const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    );  
}

export default App;