import React, {Component} from 'react';
import axios from 'axios';
import { Row, Form, Button, Col, Container, CardColumns } from 'react-bootstrap'
import AddResults from './AddResults.js';

export class AddBookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      author: '',
      response: [],
      error: '',
      noBooksFound: false
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
      if (response.data.totalItems < 1){
        this.setState({response: [], noBooksFound: true});
      } else {
        this.setState({response: response.data.items, noBooksFound: false});
      }
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
    axios.post(addNewBook, {params: {q: params}}).then((response) => {
      this.setState({response: response.data.items});
    }).catch((error) => {
      this.setState({error: error.message});
    });

  }

  findIdentifier = (isbnType, book) => {
    let result = null;
    if (!book.volumeInfo.industryIdentifiers){return null}
    book.volumeInfo.industryIdentifiers.forEach((industryIdentifier) => {
      if (industryIdentifier.type === isbnType) {
        result = industryIdentifier.identifier;
      }
    });
    return result;
  }

  render(){
    const possibleBooks = this.state.response.map((book, i) => {
      const isbn10 = this.findIdentifier("ISBN_10", book);
      const isbn13 = this.findIdentifier("ISBN_13", book);
      return (
        <AddResults
          bookCover={!book.volumeInfo.imageLinks ? '' : book.volumeInfo.imageLinks.smallThumbnail}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors || []}
          summary={book.volumeInfo.description}
          maturity={book.volumeInfo.maturityRating}
          isbn10={isbn10}
          isbn13={isbn13}
          user={this.props.user}
        />
      );
    })
    return(
      <Container>
        <Form onSubmit={this.onSearchSubmit}>
        <Form.Group>
          <Row>
            <Col><Form.Control type="search term" placeholder="Search by title, author, or keyword" value={this.state.tile} onChange={this.titleChange}/></Col>
            <Col xs="auto"><Button variant="primary" type="submit">Search</Button></Col>
          </Row>
        </Form.Group>
        </Form>
        {this.state.noBooksFound && <p>No Books Found</p>}
        {this.state.response && <CardColumns>{possibleBooks}</CardColumns>}
      </Container>
    );
  }
}

export default AddBookForm