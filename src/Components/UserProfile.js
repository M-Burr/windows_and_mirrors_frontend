import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export class UserProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: this.props.user
    }
  }
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <h5>User Profile</h5>
            <h6>{this.state.user.name}</h6>
            <p> {this.state.user.email} </p>
            <p>  {this.state.user.accountType}</p>
            <p>Request Educator Status </p>  
          </Col>
        </Row>

      </Container>
    );
  }

}

export default UserProfile