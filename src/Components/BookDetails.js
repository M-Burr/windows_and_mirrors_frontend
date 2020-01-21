import React, {Component} from 'react';
import axios from 'axios';
import Reviews from './Reviews.js'
import { Row, Col, Container, Badge, Button, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom'


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

  const authors = this.state.book.authors.map((author, i) => {
    return [
      <Link to={`/authors/${author.id}`}>{author.name}</Link>,
      i === this.state.book.authors.length - 1 ? '' : ', '
    ]
})

const identifiers = this.state.book.tags.map((tag) => {
  return (<div>
    <Badge variant="light">
      <Link to={`/search?identifiers=${encodeURIComponent(tag.identifier)}`}>{tag.identifier}</Link>
    </Badge>
    </div>
  )
})
  return(
    <Container>
      <Row>
        <Col xs={9}> 
        <Row>
          <Col xs={3} className="my-2">
            <img src={this.state.book.bookCover} alt="book cover"/>
          </Col>
          <Col xs={9}>
            <h2>{this.state.book.title}</h2>
            <hr />
            <h4>By: {authors}</h4>
             <p>{this.state.book.summary}</p>
             <hr />
             <Button variant="warning" target="_blank" href={`https://www.amazon.com/dp/${this.state.book.isbn10}`}>
               Buy this book
             </Button>
             <hr /> 
          </Col>
        </Row>
        <Reviews bookId={this.state.book.id} bookTitle={this.state.book.title} userId={this.props.userId}/>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item><strong>Genre:</strong> {this.state.book.genre}</ListGroup.Item>
            <ListGroup.Item><strong>ISBN 10:</strong> {this.state.book.isbn10}</ListGroup.Item>
            <ListGroup.Item><strong>ISBN 13:</strong> {this.state.book.isbn13}</ListGroup.Item>
          </ListGroup>
          <div style={{ marginTop: 35 }}>
            <h6>Tags</h6>
            {identifiers}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
}


export default BookDetails