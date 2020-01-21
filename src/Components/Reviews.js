import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Button, Tabs, Tab} from 'react-bootstrap';
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
      reviews: [],
      displayAddReview: false,
      averageReviewsByAccountType: {}
    }
  }
  componentDidMount(){
    const reviews = `/api/reviews_summary/${this.props.bookId}`
    axios.get(reviews).then((response) => {
      this.setState({averageReviewsByAccountType: response.data.averageReviewsByAccountType, reviews: response.data.reviews})
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
    const averageReviewsByAccountType = this.state.averageReviewsByAccountType
    if (review.accountType === "general"){
      const numReviews = this.getGeneralReviews().length
      const oldSum = averageReviewsByAccountType.general * numReviews
      const newAvg = (oldSum + review.rating) / (numReviews + 1)
      averageReviewsByAccountType.general = newAvg
    }else {
      const numReviews = this.getEducatorReviews().length
      const oldSum = averageReviewsByAccountType.educator * numReviews
      const newAvg = (oldSum + review.rating) / (numReviews + 1)
      averageReviewsByAccountType.educator = newAvg
    }

    const reviews =  this.state.reviews;
    reviews.push(review);

    this.setState({
      reviews: reviews,
      averageReviewsByAccountType: averageReviewsByAccountType
    });
  }

  getEducatorReviews(){
    const educatorReviews = this.state.reviews.filter((review)=>{
      return review.accountType === "educator"
    }).map((review)=> {
      return (<Review review={review}/>)
    });

    return educatorReviews
  }

  getGeneralReviews(){
    const generalReviews = this.state.reviews.filter((review)=>{
      return review.accountType === "general"
    }).map((review)=>{
      return(<Review review={review} />) 
    }) 
    return generalReviews
  }

  render(){
    if (this.state.response === null) {
      return "...";
    }
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
         <ReviewsSummary averageRatingByAccountType={this.state.averageReviewsByAccountType} />
       </Col>
       <Col xs={9}>
         <Tabs defaultActiveKey="Educator">
           <Tab eventKey="Educator" title="Educator">
             <br />
             {this.getEducatorReviews()}
           </Tab>
           <Tab eventKey="General" title="General">
              <br />
             {this.getGeneralReviews()}
           </Tab>
         </Tabs>
       </Col>
      </Row>
    )
  }
}

export default Reviews