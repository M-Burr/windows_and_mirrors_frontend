import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'
import AddBookWithReview from './AddBookWithReview';

export class AddResults extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayForm: false
    }
  }

  showReviewForm =() => {
    this.setState({displayForm: true})
  }

  hideReviewForm = () => {
    this.setState({displayForm: false})
  }

  render(){
    const authors = this.props.authors.map((author)=>{
      return author
    }).join(", ");
    return(
      <Card border="dark">
        <Card.Img variant="top" src={this.props.bookCover} />
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Text><strong>By: </strong>{authors}</Card.Text>
          <Button variant="primary" onClick={this.showReviewForm}>Add And Review This Book!</Button>
          <Card.Text style={{marginTop: 15}}><strong>Summary: </strong>{this.props.summary}</Card.Text>  
          {this.state.displayForm === true && <AddBookWithReview 
          title={this.props.title} 
          authors={this.props.authors} 
          bookCover={this.props.bookCover} 
          summary={this.props.summary} 
          isbn10={this.props.isbn10} 
          isbn13={this.props.isbn13}
          maturityRating={this.props.maturityRating}
          user={this.props.user} 
          onClose={this.hideReviewForm}/>}
        </Card.Body>    
      </Card>
    )
  }

}

AddResults.propTypes = {
  title: propTypes.string.isRequired,
  authors: propTypes.arrayOf,
  bookCover: propTypes.string,
  summary: propTypes.string.isRequired,
  isbn10: propTypes.string.isRequired,
  isbn13: propTypes.string.isRequired,
  maturityRating: propTypes.string.isRequired,
  user: propTypes.object.isRequired
}

export default AddResults