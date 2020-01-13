import React, {Component} from 'react';
import Tags from './Tags.js';
import Tag from './Tag.js'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Book from './Book.js';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      tags: [], 
      response: [],
      error: ''
    }

  }
  
  onSelection = (identifier, nextState) => {
    const normalizedTag = identifier.toLowerCase();
    if (nextState) {
      // add tag to state
      this.setState({
        tags: this.state.tags.concat([ normalizedTag ])
      });
    } else {
      // remove tag from state
      const tags = this.state.tags;
      const index = tags.indexOf(normalizedTag);
      if (index > -1) {
        tags.splice(index, 1);
      }
      this.setState({
        tags: tags
      })
    }
  }

  onSearch = () => {
    //send QP to back end
    const searchTerms = this.state.tags.join(',')
    const completedsearch = 'http://localhost:8080/api/complete-search'
    axios.get(completedsearch, {params: {identifier: searchTerms}}).then((response) => {
      this.setState({
        response: response.data
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    })
  }

  render(){
    const filteredResults = this.state.response.map((book, i) => {
      return <Book key={i} id={book.id} title={book.title} authors={book.authors} img={book.img} tags={book.tags} genre={book.genre} isbn10={book.isbn10} isbn13={book.isbn13} startAge={book.startAge} endAge={book.endAge} startGrade={book.startGrade} endGrade={book.endGrade} summary={book.summary} />
    })
    return(
      <>
      <Tags selected={this.state.tags} onSelection={this.onSelection} />
      <Button variant="primary" onClick={this.onSearch}>Search</Button>
      { this.state.response && filteredResults }
      </>
    );
  }
}



export default Search

