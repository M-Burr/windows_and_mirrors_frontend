import React, { Component } from 'react'
import { Container, Col, Row, Button, Badge } from 'react-bootstrap'
import profile from '../profile.png';
import "./UserProfile.css";

export class UserProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: this.props.user
    }
  }

  renderAccountType() {
    if (this.state.user.accountType === 'educator') {
      return <Badge variant="info">Educator</Badge>
    } else {
      return <Button variant="primary">Request Educator Status </Button> ;
    }
  }

  render(){
    return(
      <Container className="profile">
        <Row>
          <Col xs={3}>
            <img src={profile} className="profile-picture" />
          </Col>
          <Col>
            <h5>{this.state.user.name}</h5>
            <p> {this.state.user.email} </p>
            <div>
            {this.renderAccountType()}
            </div>
            
          </Col>
        </Row>

      </Container>
    );
  }

}

export default UserProfile