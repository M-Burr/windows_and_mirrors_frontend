
import React, {Component} from 'react';
import Book from './Book.js';
import axios from 'axios';
import { Row } from 'react-bootstrap'

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [],
      error: ''
    }
  }

  componentDidMount() {
    const books = 'http://localhost:8080/api/books'
    axios.get(books).then((response) => {
      
      this.setState({
        bookList: response.data
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  render () {
    const allBooks = this.state.bookList.map((book, i) => {
      return (
        <Book key={i} id={book.id} title={book.title} authors={book.authors} tags={book.tags} isbn10={book.isbn10} isbn13={book.isbn13} genre={book.genre} startAge={book.startAge} endAge={book.endAge} startGrade={book.startGrade} endGrade={book.endGrade} summary={book.summary}/>
      )
    })
    return (
      <Row>
        {allBooks}
      </Row>
    )
  }
}

export default Books