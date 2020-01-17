import React, {Component} from 'react';
import AddResults from './AddResults.js';
import Tags from './Tags.js'
import { Modal, Button } from 'react-bootstrap'

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
      startAge: '',
      endAge: '',
      startGrade: '',
      endGrade: '',
      user_id: this.props.user.id,
      rating: '',
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
                Appropriate for - starting age (in years):<select>
                  <option value="0" onChange={this.startAgeChange}>0</option>
                  <option value="1" onChange={this.startAgeChange}>1</option>
                  <option value="2" onChange={this.startAgeChange}>2</option>
                  <option value="3" onChange={this.startAgeChange}>3</option>
                  <option value="4" onChange={this.startAgeChange}>4</option>
                  <option value="5" onChange={this.startAgeChange}>5</option>
                  <option value="6" onChange={this.startAgeChange}>6</option>
                  <option value="7" onChange={this.startAgeChange}>7</option>
                  <option value="8" onChange={this.startAgeChange}>8</option>
                  <option value="9" onChange={this.startAgeChange}>9</option>
                  <option value="10" onChange={this.startAgeChange}>10</option>
                  <option value="11" onChange={this.startAgeChange}>11</option>
                  <option value="12" onChange={this.startAgeChange}>12</option>
                </select>
                Appropriate for - ending age (in years): <select>
                  <option value="0" onChange={this.endAgeChange}>0</option>
                  <option value="1" onChange={this.endAgeChange}>1</option>
                  <option value="2" onChange={this.endAgeChange}>2</option>
                  <option value="3" onChange={this.endAgeChange}>3</option>
                  <option value="4" onChange={this.endAgeChange}>4</option>
                  <option value="5" onChange={this.endAgeChange}>5</option>
                  <option value="6" onChange={this.endAgeChange}>6</option>
                  <option value="7" onChange={this.endAgeChange}>7</option>
                  <option value="8" onChange={this.endAgeChange}>8</option>
                  <option value="9" onChange={this.endAgeChange}>9</option>
                  <option value="10" onChange={this.endAgeChange}>10</option>
                  <option value="11" onChange={this.endAgeChange}>11</option>
                  <option value="12" onChange={this.endAgeChange}>12</option>
                </select>
                Appropriate for - starting Grade: <select>
                  <option value="0" onChange={this.startGradeChange}>Toddlerhood</option>
                  <option value="1" onChange={this.startGradeChange}>Preschool</option>
                  <option value="2" onChange={this.startGradeChange}>1st</option>
                  <option value="3" onChange={this.startGradeChange}>2nd</option>
                  <option value="4" onChange={this.startGradeChange}>3rd</option>
                  <option value="5" onChange={this.startGradeChange}>4th</option>
                  <option value="6" onChange={this.startGradeChange}>5th</option>
                  <option value="7" onChange={this.startGradeChange}>6th</option>
                  <option value="8" onChange={this.startGradeChange}>7th</option>
                  <option value="9" onChange={this.startGradeChange}>8th</option>
                  <option value="10" onChange={this.startGradeChange}>9th</option>
                  <option value="11" onChange={this.startGradeChange}>10th</option>
                  <option value="12" onChange={this.startGradeChange}>11th</option>
                  <option value="13" onChange={this.startGradeChange}>12th</option>
                </select>
                Appropriate for - ending Grade: <select>
                  <option value="0" onChange={this.endGradeChange}>Toddlerhood</option>
                  <option value="1" onChange={this.endGradeChange}>Preschool</option>
                  <option value="2" onChange={this.endGradeChange}>1st</option>
                  <option value="3" onChange={this.endGradeChange}>2nd</option>
                  <option value="4" onChange={this.endGradeChange}>3rd</option>
                  <option value="5" onChange={this.endGradeChange}>4th</option>
                  <option value="6" onChange={this.endGradeChange}>5th</option>
                  <option value="7" onChange={this.endGradeChange}>6th</option>
                  <option value="8" onChange={this.endGradeChange}>7th</option>
                  <option value="9" onChange={this.endGradeChange}>8th</option>
                  <option value="10" onChange={this.endGradeChange}>9th</option>
                  <option value="11" onChange={this.endGradeChange}>10th</option>
                  <option value="12" onChange={this.endGradeChange}>11th</option>
                  <option value="13" onChange={this.endGradeChange}>12th</option>
                </select>
                Please Rating This Book: <select>
                  <option value="0" on change={this.ratingChange}>0</option>
                  <option value="1" on change={this.ratingChange}>1</option>
                  <option value="2" on change={this.ratingChange}>2</option>
                  <option value="3" on change={this.ratingChange}>3</option>
                  <option value="4" on change={this.ratingChange}>4</option>
                  <option value="5" on change={this.ratingChange}>5</option>
                </select>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="primary" onClick={this.handleClose}>Add Book with Review</Button>
          </Modal.Footer>
        </Modal>
        </>
    );
  }
}


export default AddBookWithReview