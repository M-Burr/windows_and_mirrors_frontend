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
      <Card border="dark">
        <Link to={`/books/${this.props.id}`}>
          <Card.Img variant="top" src={this.props.bookCover} />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to={`/books/${this.props.id}`}>{this.props.title}</Link>
          </Card.Title>
          <Card.Text>
            By: {bookAuthors}
            Tags: {tags}
            Genre:{this.props.genre}
            ISBN 10: {this.props.isbn10}
            ISBN 13: {this.props.isbn13}
            Recommended Ages: {this.props.startAge} - {this.props.endAge}
            Recommended Grades: {this.props.startGrade} - {this.props.endGrade}
            Summary: {this.props.summary}
          </Card.Text>    
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