import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from './Components/Books.js'
import UserProfile from './Components/UserProfile.js'
import BookDetails from './Components/BookDetails.js'
import Authors from './Components/Authors.js'
import Search from './Components/Search.js'
import SearchBookForm from './Components/SearchBookForm'
import EarlyReader from './images/EarlyReader.jpg'
import FamilyReadingFun from './images/FamilyReadingFun.jpg'
import SuperMom from './images/SuperMom.jpg'
import TeacherReading from './images/TeacherReading.jpg'
import './App.css';
import Cookies from 'js-cookie'
import {Navbar, Nav, Carousel, Container} from 'react-bootstrap';
import Axios from 'axios';
import AuthorDetails from './Components/AuthorDetails';
import About from './Components/About.js'


export class App extends Component {
  constructor(props){
    super(props);

    const user = JSON.parse(Cookies.get("user") || "{}")
    this.state = {
      user: user,
      error: ''
    }
  }


  responseGoogle = (response) =>{
    console.log(response)
    Axios.post("/api/login", {userToken: response.getAuthResponse().id_token}).then((response) =>{
      Cookies.set("user", JSON.stringify(response.data), {expires: 2})
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

  logout = () => {
    this.setState({user: {}});
    Cookies.remove("user")
  }

   
  render() {
    const user = this.state.user
    return (
      <Router>
        <Navbar>
          <Navbar.Brand> <Link className="nav-link" to="/"> Windows and Mirrors </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
          <Link className="nav-link" to="/about">ABOUT</Link>
          <Link className="nav-link" to="/books">BOOKS</Link>
           <Link className="nav-link" to="/authors">AUTHORS</Link>
           <Link className="nav-link" to="/search">SEARCH</Link>
           {user.email && <Link className="nav-link" to="/add">ADD BOOK</Link>}
           </Nav>
           {!user.email && <GoogleLogin 
           clientId="134231042819-ldje18ruml7mdidv2ca21946nputsmbu.apps.googleusercontent.com"
           buttonText="Login"
           onSuccess={this.responseGoogle}
           onFailure={this.responseGoogleFailure}
           cookiePolicy={'single_host_origin'}
           /> }
           {user.email &&
           <Link className="nav-link" to="/profile">PROFILE</Link>
           }
           {user.email && 
           <GoogleLogout
           clientId="134231042819-ldje18ruml7mdidv2ca21946nputsmbu.apps.googleusercontent.com"
           buttonText="Logout"
           onLogoutSuccess={this.logout}>
         </GoogleLogout>
           }
        </Navbar>
        <div>
          <Switch>
            <Route 
              path="/books/:id" 
              render={(props) => <BookDetails {...props} userId={this.state.user.id} />}
            />
            <Route
              path="/authors/:id"
              component={AuthorDetails}
             />
            <Route path="/add"> <SearchBookForm user={this.state.user}/> </Route>
            <Route path="/books"> <Books/> </Route>
            <Route path="/authors"> <Authors/> </Route> 
            <Route path="/search" component={Search} />
            <Route path="/profile"><UserProfile user={this.state.user}/></Route>
            <Route path="/about"><About /></Route>
            <Route path="/">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100"
                  src={TeacherReading}
                  alt="A teacher is reading to her students" 
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100"
                  src={EarlyReader}
                  alt="Two parents are reading to their toddler"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100"
                  src={FamilyReadingFun}
                  alt="Two parents are reading to their young child"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100"
                  src={SuperMom}
                  alt="A mom and her daughter are dressed like Superwoman and reading a book together"
                  />
                </Carousel.Item>
              </Carousel>
            </Route>
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
