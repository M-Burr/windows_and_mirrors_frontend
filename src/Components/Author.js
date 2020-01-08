import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Card } from 'react-bootstrap'

class Author extends Component{
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      averageRating: this.props.averageRating
    }
  }

  render() {
    return (
      <Card style={{width: "25%"}}>
        <Card.Body>
          <Card.Title>Name: {this.props.name}</Card.Title>
          <Card.Text>Average Rating: {this.props.averageRating}</Card.Text>
        </Card.Body> 
      </Card>
    )
  }
}

Author.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  averageRating: propTypes.number.isRequired
}

export default Author