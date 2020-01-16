import React, {Component} from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap'
import AddResults from './AddResults.js';

export class AddBookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      author: '',
      response: [],
      error: ''
    }
  }

  titleChange =(event) =>{
    this.setState({title: event.target.value});
  }

  authorChange = (event) => {
    this.setState({author: event.target.value});
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title
    const googleBooks = "https://www.googleapis.com/books/v1/volumes"
    axios.get(googleBooks, {params: {q: title}}).then((response) => {
      this.setState({response: response.data.items});
    }).catch((error) => {
      this.setState({error: error.message});
    });
  }

  onBookSubmit = (e) => {
    e.preventDefault();
    const params = this.state.response.map((book) => {
      return(book.volumeInfo.title)
    })
    const addNewBook = "/api/books"
    axios.post(addNewBook, {params: {q: this.params}}).then((response) => {
      this.setState({response: response.data.items});
    }).catch((error) => {
      this.setState({error: error.message});
    });

  }
  render(){
    const possibleBooks = this.state.response.map((book, i) => {
    return(<AddResults bookCover={book.volumeInfo.imageLinks.smallThumbnail} title={book.volumeInfo.title} authors={book.volumeInfo.authors} summary={book.volumeInfo.description}/>)
    })
    return(
      <section>
        <form onSubmit={this.onSearchSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.titleChange} />
          </label>
          <label>
            Author:
            <input type="text" value={this.state.author} onChange={this.authorChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
          {this.state.response && <Row>{possibleBooks}</Row>}
      </section>
    );
  }
}

export default AddBookForm