import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Book extends Component {


  render(){
    const bookAuthors = this.props.authors.map((author) => {
      return author.name
    }).join(',  ');

    const tags = this.props.tags.map((tag) => {
      return tag.identifier
    }).join(',');
    return (
      <Card style={{width: "25%"}}>
        <Card.Body>
          <Card.Title>
            <Link to={`/books/${this.props.id}`}>{this.props.title}</Link>
          </Card.Title>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91TjCYwmjRL._AC_UY436_FMwebp_QL65_.jpg" />
          <Card.Text>By: {bookAuthors}</Card.Text>
          <Card.Text>Tags: {tags} </Card.Text>
          <Card.Text>Genre:{this.props.genre}</Card.Text>
          <Card.Text>ISBN 10: {this.props.isbn10}</Card.Text>
          <Card.Text>ISBN 13: {this.props.isbn13}</Card.Text>
          <Card.Text>Recommended Ages: {this.props.startAge} - {this.props.endAge}</Card.Text>
          <Card.Text>Recommended Grades: {this.props.startGrade} - {this.props.endGrade}</Card.Text>
          <Card.Text>Summary: {this.props.summary}</Card.Text>    
        </Card.Body>    
      </Card>
    )
  }
}


Book.propTypes = {
  id: propTypes.number,
  title: propTypes.string.isRequired,
  authors: propTypes.arrayOf,
  genre: propTypes.string,
  isbn10: propTypes.string,
  isbn13: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  bookCover: propTypes.string,
  startAge: propTypes.number,
  endAge: propTypes.number,
  startGrade: propTypes.string,
  endGrade: propTypes.string,
}
export default Book