
import React, {Component} from 'react';
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
    let booksInfo = this.state.bookList
    return (
      <div>
        {booksInfo}
      </div>
    )
  }
}

export default Books