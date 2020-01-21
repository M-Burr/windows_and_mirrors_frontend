import React, {Component} from 'react';
import propTypes from 'prop-types'
import {Modal, Button, Form} from 'react-bootstrap'
import axios from 'axios';

export class AddReviewExistingBook extends Component {
  constructor(props){
    super(props);

    this.state = {
      praise: '',
      concerns: '',
      discussionTopics: '',
      rating: 0,
      response: '',
      error: ''

    }
  }

  onPraiseChange = (event) => {
    this.setState({praise: event.target.value})
  }

  onConcernChange = (event) => {
    this.setState({concerns: event.target.value})
  }

  onDiscussionChange = (event) => {
    this.setState({discussionTopics: event.target.value})
  }

  onRatingChange = (event) => {
    this.setState({rating: event.target.value})
  }

  onReviewSubmit = (e) => {
    e.preventDefault();
    const reviewParams = {
      praise: this.state.praise,
      concern: this.state.concerns,
      discussionTopics: this.state.discussionTopics,
      rating: this.state.rating,
      bookId: this.props.bookId,
      userId: this.props.userId
    }
    const addReviews=`/api/reviews_summary/${this.props.bookId}`
    axios.post(addReviews, reviewParams).then((response) => {
      this.setState({response: response.data}, () => {
        this.props.addReview(response.data);
        this.props.hideReviewForm();
      });
      
    }).catch((error) => {
      this.setState({error: error.message}, () => {
        this.props.hideReviewForm();
      });
    })
  }

render(){
  return(
    <Modal show={true} onHide={this.props.hideReviewForm}>
      <Modal.Header closeButton>
      <Modal.Title>Review {this.props.bookTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
          <Form.Control placeholder="Enter Praise..." value={this.state.praise} onChange={this.onPraiseChange}/>
          </Form.Group>
          <Form.Group>
          <Form.Control placeholder="Enter Concerns..."value={this.state.concern} onChange={this.onConcernChange}  />
          </Form.Group>
          <Form.Group>
          <Form.Control placeholder="Enter Discussion Topics for this Book" value={this.state.discussionTopics} onChange={this.onDiscussionChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating: </Form.Label>
            <Form.Control as="select" value={this.state.ratings} onChange={this.onRatingChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.hideReviewForm}>Close</Button>
        <Button variant="primary" onClick={this.onReviewSubmit}>Add Book with Review</Button>
      </Modal.Footer>
    </Modal>
  )
}
}

export default AddReviewExistingBook

AddReviewExistingBook.propTypes = {
  hideReviewForm: propTypes.func.isRequired,
  addReview: propTypes.func.isRequired
}