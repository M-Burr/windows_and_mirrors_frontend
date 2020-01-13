import React, {Component} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import Book from './Book'

export class BookDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      book: undefined,
      error: ''
    }
  }

componentDidMount(){
  const bookDetails = `http://localhost:8080/books/${this.props.match.params.id}`
  axios.get(bookDetails).then((response) =>{
    this.setState({
      book: response.data
    });
  })
  .catch(error => {
    this.setState({error: error.message});
  })
}

render(){
  return(
    <div>
      {this.state.book && <Book  id={this.state.book.id} title={this.state.book.title} authors={this.state.book.authors} tags={this.state.book.tags} isbn10={this.state.book.isbn10} isbn13={this.state.book.isbn13} genre={this.state.book.genre} startAge={this.state.book.startAge} endAge={this.state.book.endAge} startGrade={this.state.book.startGrade} endGrade={this.state.book.endGrade} summary={this.state.book.summary}/>}
      {!this.state.book && "Book is still loading!"}
    </div>
  )
}
}


export default BookDetails