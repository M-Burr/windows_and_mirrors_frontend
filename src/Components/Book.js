import React, {Component} from 'react';
import propTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      genre: this.props.genre,
      isbn10: this.props.isbn10,
      isbn13: this.props.isbn13,
      summary: this.props.summary,
      bookCover: this.props.bookCover,
      startAge: this.props.startAge,
      endAge: this.props.endAge,
      startGrade: this.props.startGrade,
      endGrade: this.props.endGrade
    }
  }

  render(){
    const bookAuthors = this.props.authors.map((author, i) => {
      return author.name
    }).join(', ');
    return (
      <section>
       <h1>{this.props.title}</h1>
       <h2>By: {bookAuthors}</h2>
       <h3>Genre:{this.props.genre}</h3>
       <p>ISBN 10: {this.props.isbn10}</p>
       <p>ISBN 13: {this.props.isbn13}</p>
      <p>Recommended Ages: {this.props.startAge} - {this.props.endAge}</p>
      <p>Recommended Grades: {this.props.startGrade} - {this.props.endGrade}</p>
       <p>Summary: {this.props.summary}</p>        
      </section>
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
  endGrade: propTypes.string
}
export default Book