import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Table } from 'react-bootstrap';

export class Review extends Component {
  
  render(){
    return(
      <Row>
        <Col>
          <Table bordered size="sm">
            <tbody>
            <tr><th>Name</th><td style={{width:"100%"}}>{this.props.review.userName}</td></tr>
            <tr><th>Rating</th><td>{this.props.review.rating}</td></tr>
            <tr><th>Praise</th><td>{this.props.review.praise}</td></tr>
            <tr><th>Concern(s)</th><td>{this.props.review.concern}</td></tr>
            <tr><th>Discussion Topic(s)</th><td>{this.props.review.discussionTopics}</td></tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }

}

export default Review