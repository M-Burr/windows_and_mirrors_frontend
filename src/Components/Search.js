import React, {Component} from 'react';
import Tags from './Tags.js';
import Ages from './Ages.js';
import { Button, Form, Row, Col, CardColumns, Container } from 'react-bootstrap';
import axios from 'axios';
import Book from './Book.js';
import queryString from 'query-string'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      tags: [], 
      ages: [],
      response: [],
      error: '',
      noBooksFound: false
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

  componentDidMount() {
    const values = queryString.parse(this.props.location.search, {arrayFormat: 'comma'})
    if (values.identifiers){
    const identifiers = Array.isArray(values.identifiers) ? values.identifiers : Array.of(values.identifiers)
    this.setState({
      tags: identifiers.map(tag => tag.toLowerCase())
    }, this.onSearch)}
  }

  onSearch = () => {
    //send QP to back end
    const searchIdentifiers = this.state.tags.join(',')
    const searchAges = this.state.ages.join(',')
    const completedsearch = '/api/complete-search'
    axios.get(completedsearch, {params: {identifier: searchIdentifiers, ages: searchAges}}).then((response) => {
      if (response.data.length < 1){
        this.setState({noBooksFound: true, response: []});

      } else {
        this.setState({
          response: response.data,
          noBooksFound: false
        });
      }
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
      <Container>
        <div key="inline-checkbox" className="mb-3">
          <h4>Choose Ages:</h4>
          <Ages selected={this.state.ages} onAgesSelection={this.onAgesSelection} />
        </div>
        <div>
          <h4>Please Choose Identifiers:</h4>
          <Tags selected={this.state.tags} onSelection={this.onIdentifierSelection}/>
          <Button variant="primary" onClick={this.onSearch}>Search</Button>
        </div> 
      </Container>
      {this.state.noBooksFound && <p>No Books Found</p>}
      <Container>
        { 
          this.state.response && 
          <CardColumns>{filteredResults}</CardColumns>
        }
      </Container>
      </>
    );
  }
}



export default Search

