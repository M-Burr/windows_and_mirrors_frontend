import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from './Components/Books.js'
import Authors from './Components/Authors.js'



export class App extends Component {
  
  render() {
    return (
      <Router>
         <Link to="/"> HOME </Link>
        <Link to="/books">BOOKS</Link>
        <Link to="/authors">AUTHORS</Link>
        <Switch>
          <Route path="/books"> <Books/> </Route>
          <Route path="/authors"> <Authors/> </Route> 
          <Route path="/"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
