
import React, {Component} from 'react';
import Book from './Book.js';
import axios from 'axios';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [],
      error: ''
    }
  }

  componentDidMount() {
    const books = 'http://localhost:8080/books'
    axios.get(books).then((response) => {
      
      this.setState({
        bookList: response.data
      });
      console.log(response.data)

    })
    .catch((error) => {
      this.setState({error: error.message});
      console.log(error.message)
    });
  }

  render () {
    let allBooks = this.state.bookList.map((book, i) => {
      return (
        <Book key={i} title={book.title} author={book.author} isbn10={book.isbn10} summary={book.summary}/>
      )
    })
    return (
      <div>
        {allBooks}
      </div>
    )
  }
}

export default Books