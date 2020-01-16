import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'

export class AddResults extends Component {

  render(){
    const authors = this.props.authors.map((author)=>{
      return author
    }).join(", ");
    return(
      <Card style={{width: "15%"}}>
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Img variant="top" src={this.props.bookCover} />
          <Card.Text>By: {authors}</Card.Text>
          <Card.Text>Summary: {this.props.summary}</Card.Text>  
          <Button variant="primary">Add This Book!</Button>
        </Card.Body>    
      </Card>
    )
  }

}

AddResults.propTypes = {
  title: propTypes.string.isRequired,
  //authors: propTypes.arrayOf,
  bookCover: propTypes.string,
  summary: propTypes.string.isRequired
}

export default AddResults