import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'

export class ReviewsSummary extends Component {
  formatedRating(accountType){
    const rating = this.props.averageRatingByAccountType[accountType]
    if (rating){
      return <strong>{rating}</strong>
    } else {
      return <i>Not Yet Rated</i>
    }
  }
  
  render(){
    return(
     <Row>
       <Col xs={6}>
         Educator Rating: {this.formatedRating("educator")}
       </Col>
       <Col xs={6}> General Rating: {this.formatedRating("general")}
       </Col>
     </Row>
    );
  }

}

export default ReviewsSummary