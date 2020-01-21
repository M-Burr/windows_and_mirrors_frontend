import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Book extends Component {


  render(){
    const bookAuthors = this.props.authors.map((author, i) => {
      return [
        <Link to={`/authors/${author.id}`}>{author.name}</Link>,
        i === this.props.authors.length - 1 ? '' : ', '
      ];
    });

    const tags = this.props.tags.map((tag) => {
      return [
        <Link to={`/search?identifiers=${encodeURIComponent(tag.identifier)}`}>
          <Badge variant="info">{tag.identifier}</Badge>
        </Link>,
        <span>&nbsp;</span>
      ]
    });
    return (
      <Card border="dark">
        <Link to={`/books/${this.props.id}`}>
          <Card.Img variant="top" src={this.props.bookCover} />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link className="card-link" to={`/books/${this.props.id}`}>{this.props.title}</Link>
          </Card.Title>
          <Card.Text><strong>By:</strong> {bookAuthors}</Card.Text>
          <Card.Text>
            <strong>Average Rating:</strong> {Math.round(this.props.averageRating * 100) / 100}
          </Card.Text>
          <Card.Text><strong>Recommended Ages:</strong> {this.props.startAge} - {this.props.endAge}</Card.Text>
          <Card.Text><strong>Summary:</strong> {this.props.summary}</Card.Text>
        </Card.Body>
        <Card.Footer>
        {tags}
        </Card.Footer>
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