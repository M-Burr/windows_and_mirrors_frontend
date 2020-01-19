import React, {Component} from 'react';
import AddResults from './AddResults.js';
import Tags from './Tags.js'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export class AddBookWithReview extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: true,
      title: this.props.title,
      authors: this.props.authors,
      bookCover: this.props.bookCover,
      isbn10: this.props.isbn10,
      isbn13: this.props.isbn13,
      summary: this.props.summary,
      maturityRating: this.props.maturityRating,
      tags: [],
      genre: '',
      startAge: 0,
      endAge: 0,
      startGrade: 0,
      endGrade: 0,
      user_id: this.props.user.id,
      rating: 0,
      praise: '',
      concern: '',
      discussion_topic: ''
    }
  }

  handleClose = () => {
      this.setState({show: false});
      this.props.onClose();
  };
  
  genreChange = (event) => {
    this.setState({genre: event.target.value});
  }

  praiseChange = (event) => {
    this.setState({praise: event.target.value});
  }
  concernChange = (event) => {
    this.setState({concern: event.target.value});
  }

  discussionChange = (event) => {
    this.setState({discussion_topic: event.target.value});
  }

  startAgeChange = (event) => {
    this.setState({startAge: event.target.value});
  }

  endAgeChange = (event) => {
    this.setState({endAge: event.target.value});
  }

  startGradeChange = (event) => {
    this.setState({startGrade: event.target.value});
  }

  endGradeChange = (event) => {
    this.setState({endGrade: event.target.value});
  }

  ratingChange = (event) => {
    this.setState({rating: event.target.value});
  }

  onTagSelection = (tag, nextState) => {
    const normalizedTag = tag.toLowerCase();
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

  onBookSubmit = (e) => {
    e.preventDefault();
    const bookParams = {
      title: this.state.title,
      authors: this.state.authors,
      bookCover: this.state.bookCover,
      genre: this.state.genre,
      isbn10: this.state.isbn10,
      isbn13: this.state.isbn13,
      summary: this.state.summary,
      tags: this.state.tags,
      startAge: this.state.startAge,
      endAge: this.state.endAge,
      startGrade: this.state.startGrade,
      endGrade: this.state.endGrade,
      userId: this.state.user_id,
      rating: this.state.rating,
      praise: this.state.praise,
      concern: this.state.concern,
      discussionTopic: this.state.discussion_topic
    }
    const databaseBook = "/api/books"   
    axios.post(databaseBook,bookParams).then((response) => {
      this.setState({response: response.data.items});
    }).catch((error) => {
      this.setState({error: error.message});
    });
    this.handleClose()
  }

  render(){
    return(
        <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Review Needed to Add a Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4>{this.state.title}</h4>
              <form>
                <label>Genre: <input type="text" value={this.state.genre} onChange={this.genreChange} /></label>
                <label>Praise: <input type="text" value={this.state.praise} onChange={this.praiseChange} /></label>
                <label>Concerns: <input type="text" value={this.state.concern} onChange={this.concernChange} /></label>
                <label>Related Classroom Discussions: <input type="text" value={this.state.discussion_topic} onChange={this.discussionChange} /></label>
                Tags:<Tags selected={this.state.tags} onSelection={this.onTagSelection} />
                Appropriate for - starting age (in years):<select value={this.state.startAge} onChange={this.startAgeChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                Appropriate for - ending age (in years): <select value={this.state.endAge} onChange={this.endAgeChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                Appropriate for - starting Grade: <select value={this.state.startGrade} onChange={this.startGradeChange}>
                  <option value="0">Toddlerhood</option>
                  <option value="1">Preschool</option>
                  <option value="2">Kindergarten</option>
                  <option value="3">1st</option>
                  <option value="4">2nd</option>
                  <option value="5">3rd</option>
                  <option value="6">4th</option>
                  <option value="7">5th</option>
                  <option value="8">6th</option>
                  <option value="9">7th</option>
                  <option value="10">8th</option>
                  <option value="11">9th</option>
                  <option value="12">10th</option>
                  <option value="13">11th</option>
                  <option value="14">12th</option>
                </select>
                Appropriate for - ending Grade: <select value={this.state.endGrade} onChange={this.endGradeChange}>
                  <option value="0">Toddlerhood</option>
                  <option value="1">Preschool</option>
                  <option value="2">Kindergarten</option>
                  <option value="3">1st</option>
                  <option value="4">2nd</option>
                  <option value="5">3rd</option>
                  <option value="6">4th</option>
                  <option value="7">5th</option>
                  <option value="8">6th</option>
                  <option value="9">7th</option>
                  <option value="10">8th</option>
                  <option value="11">9th</option>
                  <option value="12">10th</option>
                  <option value="13">11th</option>
                  <option value="14">12th</option>
                </select>
                Please Rating This Book: <select value={this.state.rating} onChange={this.ratingChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="primary" onClick={this.onBookSubmit}>Add Book with Review</Button>
          </Modal.Footer>
        </Modal>
        </>
    );
  }
}


export default AddBookWithReview