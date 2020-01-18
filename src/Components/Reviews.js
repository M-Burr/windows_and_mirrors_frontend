import React, {Component} from 'react';
import axios from 'axios';
import Book from './Book';
import { Row, Col, Container } from 'react-bootstrap';
import ReviewsSummary from './ReviewsSummary';
import Review from './Review.js'

export class Reviews extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {},
      praise: '',
      concern: '',
      discussion_topic: '',
      response: null
    }
  }
  componentDidMount(){
    const reviews = `/api/reviews_summary/${this.props.bookId}`
    axios.get(reviews).then((response) => {
      this.setState({response: response.data})
    }).catch((error) => {
      this.setState({error: error.message})
    });
  }

  render(){
    if (this.state.response === null) {
      return "...";
    }

    const allreviews = this.state.response.reviews.map((review) => {
      return (<Review review={review} />)
    })
    return(
      <Row>
       <Col xs={3}></Col>
       <Col xs={9}>
        <ReviewsSummary averageRatingByAccountType={this.state.response.averageReviewsByAccountType} />
        { allreviews }
       </Col>
      </Row>
    )
  }
}

export default Reviews