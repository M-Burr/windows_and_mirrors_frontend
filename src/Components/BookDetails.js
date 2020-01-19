import React, {Component} from 'react';
import axios from 'axios';
import Book from './Book';
import Reviews from './Reviews.js'
import { Row, Col, Container } from 'react-bootstrap';


export class BookDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      book: undefined,
      error: '',
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
  if (!this.state.book){
    return null
  }

  const authors = this.state.book.authors.map((author) => {
    return <p>{author.name}</p>
})

const identifiers = this.state.book.tags.map((tag) => {
return <p>{tag.identifier}</p>
})
  return(
    <Container>
      <Row>
        <Col xs={9}> 
        <Row>
          <Col xs={3}> <img src={this.state.book.bookCover} alt="book cover"/></Col>
          <Col xs={9}>
            <h2>{this.state.book.title}</h2>
            <h4>By: {authors}</h4>
             <p>{this.state.book.summary}</p>
          </Col>
        </Row>
        <Reviews bookId={this.state.book.id} bookTitle={this.state.book.title} userId={this.props.userId}/>
        </Col>
        <Col> 
        Genre: {this.state.book.genre}
        <br></br>
        Identifiers: {identifiers}
        </Col>
      </Row>
    </Container>
    // <Row>
    //   {this.state.book && <Book  id={this.state.book.id} bookCover={this.state.book.bookCover} title={this.state.book.title} authors={this.state.book.authors} tags={this.state.book.tags} isbn10={this.state.book.isbn10} isbn13={this.state.book.isbn13} genre={this.state.book.genre} startAge={this.state.book.startAge} endAge={this.state.book.endAge} startGrade={this.state.book.startGrade} endGrade={this.state.book.endGrade} summary={this.state.book.summary}/>}
    //   {!this.state.book && "Book is still loading!"}
    // </Row>
  )
}
}


export default BookDetails