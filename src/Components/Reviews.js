import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';
import ReviewsSummary from './ReviewsSummary';
import Review from './Review.js'
import AddReviewExistingBook from './AddReviewExistingBook';

export class Reviews extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {},
      praise: '',
      concern: '',
      discussion_topic: '',
      response: null,
      reviews: [],
      displayAddReview: false
    }
  }
  componentDidMount(){
    const reviews = `/api/reviews_summary/${this.props.bookId}`
    axios.get(reviews).then((response) => {
      this.setState({response: response.data, reviews: response.data.reviews})
    }).catch((error) => {
      this.setState({error: error.message})
    });
  }

  triggerReviewModal =() => {
    this.setState({displayAddReview: true})
  }

  hideReviewForm = () => {
    this.setState({displayAddReview: false})
  }

  addReview = (review) => {
    const reviews =  this.state.reviews
    reviews.push(review)
    this.setState({reviews: reviews});
  }

  render(){
    if (this.state.response === null) {
      return "...";
    }

    const allreviews = this.state.reviews.map((review) => {
      return (<Review review={review} />)
    })
    return(
      <Row>
       <Col xs={3}>
         {this.props.userId && <Button variant="primary" onClick={this.triggerReviewModal}>Leave a Review!</Button>}
         {
          this.state.displayAddReview && 
          <AddReviewExistingBook
            hideReviewForm={this.hideReviewForm}
            bookTitle={this.props.bookTitle}
            bookId={this.props.bookId}
            userId={this.props.userId}
            addReview={this.addReview}
          />
         }
       </Col>
       <Col xs={9}>
        <ReviewsSummary averageRatingByAccountType={this.state.response.averageReviewsByAccountType} />
        { allreviews }
       </Col>
      </Row>
    )
  }
}

export default Reviews