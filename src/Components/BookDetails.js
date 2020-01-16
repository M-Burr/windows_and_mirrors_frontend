import React, {Component} from 'react';
import axios from 'axios';
import Book from './Book';
import { Row } from 'react-bootstrap';


export class BookDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      book: undefined,
      error: ''
    }
  }

componentDidMount(){
  const bookDetails = `/api/books/${this.props.match.params.id}`
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
    <Row>
      {this.state.book && <Book  id={this.state.book.id} bookCover={this.state.book.bookCover} title={this.state.book.title} authors={this.state.book.authors} tags={this.state.book.tags} isbn10={this.state.book.isbn10} isbn13={this.state.book.isbn13} genre={this.state.book.genre} startAge={this.state.book.startAge} endAge={this.state.book.endAge} startGrade={this.state.book.startGrade} endGrade={this.state.book.endGrade} summary={this.state.book.summary}/>}
      {!this.state.book && "Book is still loading!"}
    </Row>
  )
}
}


export default BookDetails