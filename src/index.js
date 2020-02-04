import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import About from './About';
import Contact from './Contact';


const routing = (
    <BrowserRouter>
        <div>
            <h3> Demo  </h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <switch>
                <Route exact path="/" component={App}></Route>
                <Route  path="/about" component={About}></Route>
                <Route  path="/contact" component={Contact}></Route>
            </switch>
        </div>
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
