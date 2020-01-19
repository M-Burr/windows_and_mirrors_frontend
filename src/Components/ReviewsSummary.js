import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import './ReviewsSummary.css';

class ReviewNumber extends Component {
  render() {
    const rating = this.props.rating || "Not Yet Rated";

    return (
      <div class="reviews-summary-score-circle" style={{ backgroundColor: this.props.color }}>
        <span class="reviews-summary-text">{this.props.accountTypeName} Rating:</span>
        <span class="reviews-summary-score-rating">{rating}</span>
      </div>
    );
  }
}

export class ReviewsSummary extends Component {
  // formatedRating(accountType){
  //   const rating = this.props.averageRatingByAccountType[accountType]
  //   if (rating){
  //     return <strong>{rating}</strong>
  //   } else {
  //     return <i>Not Yet Rated</i>
  //   }
  // }
  
  render(){
    return(
    <>
      <ReviewNumber accountTypeName="Educator" rating={this.props.averageRatingByAccountType.educator} color="#00ff00" />
      <ReviewNumber accountTypeName="General" rating={this.props.averageRatingByAccountType.general} color="#ffff00" />
    </>
    );
  }

}

export default ReviewsSummary