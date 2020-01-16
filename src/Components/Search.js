import React, {Component} from 'react';
import Tags from './Tags.js';
import Ages from './Ages.js';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Book from './Book.js';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      tags: [], 
      ages: [],
      response: [],
      error: ''
    }

  }
  
  onIdentifierSelection = (identifier, nextState) => {
    const normalizedTag = identifier.toLowerCase();
    if (nextState) {
      // add tag to state
      this.setState({
        tags: this.state.tags.concat([ normalizedTag ])
      });
    } else {
      // remove tag from state
      const tags = this.state.tags;
      const tagsIndex = tags.indexOf(normalizedTag);
      
      if (tagsIndex > -1) {
        tags.splice(tagsIndex, 1);
      }
      this.setState({
        tags: tags
      })
    }
  }

  onAgesSelection = (age, nextState) => {
    if (nextState){
      this.setState({
        ages: this.state.ages.concat(age)
      });
    } else {
      const ages = this.state.ages;
      const agesIndex = ages.indexOf(age);

      if (agesIndex > -1){
        ages.splice(agesIndex, 1);
      }
      this.setState({
        ages: ages
      })
    }
  }


  onSearch = () => {
    //send QP to back end
    const searchIdentifiers = this.state.tags.join(',')
    const searchAges = this.state.ages.join(',')
    const completedsearch = '/api/complete-search'
    axios.get(completedsearch, {params: {identifier: searchIdentifiers, ages: searchAges}}).then((response) => {
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
      return <Book key={i} id={book.id} title={book.title} authors={book.authors} bookCover={book.bookCover} tags={book.tags} genre={book.genre} isbn10={book.isbn10} isbn13={book.isbn13} startAge={book.startAge} endAge={book.endAge} startGrade={book.startGrade} endGrade={book.endGrade} summary={book.summary} />
    });

    
    return(
      <>
      <p>Choose Ages: <Ages selected={this.state.ages} onAgesSelection={this.onAgesSelection} /> </p>
      <p>Please Choose Identifiers: 
        <Tags selected={this.state.tags} onSelection={this.onIdentifierSelection} /></p>
      <Button variant="primary" onClick={this.onSearch}>Search</Button>
      { this.state.response && filteredResults }
      </>
    );
  }
}



export default Search

