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
import diverse_classroom from './Components/Images/diverse_classroom.jpg'
import children_reading from './Components/Images/children_reading.jpg'
import './App.css';
import Cookies from 'js-cookie'
import {Navbar, Nav, Carousel} from 'react-bootstrap';
import Axios from 'axios';


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
            <Route path="/add"> <SearchBookForm user={this.state.user}/> </Route>
            <Route path="/books"> <Books/> </Route>
            <Route path="/authors"> <Authors/> </Route> 
            <Route path="/search"> <Search/> </Route>
            <Route path="/profile"><UserProfile user={this.state.user}/></Route>
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
          </div>
      </Router>
    );
  }
}

export default App;
