import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from './Components/Books.js'
import BookDetails from './Components/BookDetails.js'
import Authors from './Components/Authors.js'
import diverse_classroom from './Components/Images/diverse_classroom.jpg'
import children_reading from './Components/Images/children_reading.jpg'
import './App.css';

import {Navbar} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'


export class App extends Component {
  
  render() {
    return (
      <Router>
        <Navbar expand="lg">
          <Navbar.Brand className="spacing">
          <Link to="/"> HOME </Link>
          <Link to="/books">BOOKS</Link>
           <Link to="/authors">AUTHORS</Link>
           <Link to="/search">SEARCH</Link>
          </Navbar.Brand>
        </Navbar>
        <section>
          <Switch>
            <Route path="/books/:id" component={BookDetails} />
            <Route path="/books"> <Books/> </Route>
            <Route path="/authors"> <Authors/> </Route> 
            <Route path="/search"></Route>
            <Route path="/">
              <Carousel>
                <Carousel.Item className="carousel_picture">
                  <img className="d-block w-100"
                  src={diverse_classroom}
                  alt="Windows and Mirrors" 
                  />
                  <Carousel.Caption>
                    <h1>Windows and Mirrors</h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel_picture">
                  <img className="d-block w-100"
                  src={children_reading}
                  alt="children reading books"
                  />
                  <Carousel.Caption>
                    <h3>Children Read!</h3>
                    <p> more more more!</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
