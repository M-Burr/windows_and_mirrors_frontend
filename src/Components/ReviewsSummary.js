import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import './ReviewsSummary.css';

class ReviewNumber extends Component {
  render() {

    const rating = this.props.rating 
    const rounding = Math.round(rating * 100) / 100

    const roundedRating = rounding || "Not Yet Rated";

    return (
      <div class="reviews-summary-score-circle" style={{ backgroundColor: this.props.color }}>
        <span class="reviews-summary-text">{this.props.accountTypeName} Rating:</span>
        <span class={rounding ? "reviews-summary-score-rating" : "reviews-summary-text" }>
          {roundedRating}
        </span>
      </div>
    );
  }
}

export class ReviewsSummary extends Component {
  
  render(){
    return(
    <>
      <ReviewNumber accountTypeName="Educator" rating={this.props.averageRatingByAccountType.educator} color="#68B0AB" />
      <ReviewNumber accountTypeName="General" rating={this.props.averageRatingByAccountType.general} color="#C0D6DF" />
    </>
    );
  }

}

export default ReviewsSummary