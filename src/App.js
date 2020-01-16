import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from 'react-google-login';
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
import Search from './Components/Search.js'
import AddBookForm from './Components/AddBookForm'
import diverse_classroom from './Components/Images/diverse_classroom.jpg'
import children_reading from './Components/Images/children_reading.jpg'
import './App.css';

import {Navbar} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'
import Axios from 'axios';


export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      error: ''
    }
  }


  responseGoogle = (response) =>{
    console.log(response)
    Axios.post("/api/login", {userToken: response.getAuthResponse().id_token}).then((response) =>{
      this.setState({
        user: response.data
      })
    }).catch((error) =>{
      console.log("You failed!", error.message)
    })
  }

  responseGoogleFailure = (response) =>{
    console.log('fail');
    console.log(response)
  }


   
  render() {
    const user = this.state.user
    return (
      <Router>
        <Navbar expand="lg">
          <Navbar.Brand className="spacing">
          <Link to="/"> HOME </Link>
          <Link to="/books">BOOKS</Link>
           <Link to="/authors">AUTHORS</Link>
           <Link to="/search">SEARCH</Link>
           <GoogleLogin 
           clientId="134231042819-ldje18ruml7mdidv2ca21946nputsmbu.apps.googleusercontent.com"
           buttonText="Login"
           onSuccess={this.responseGoogle}
           onFailure={this.responseGoogleFailure}
           cookiePolicy={'single_host_origin'}
           />
           {user.email && <Link to="/add">ADD BOOK</Link>}
          </Navbar.Brand>
        </Navbar>
        <section>
          <Switch>
            <Route path="/books/:id" component={BookDetails} />
            <Route path="/add"> <AddBookForm/> </Route>
            <Route path="/books"> <Books/> </Route>
            <Route path="/authors"> <Authors/> </Route> 
            <Route path="/search"> <Search/> </Route>
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
