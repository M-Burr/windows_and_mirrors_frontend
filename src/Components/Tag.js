import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export class Tag extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.id,
      identifier: this.props.identifier
    }
  }

  onChange = (e) => {
    const nextState = e.target.checked;
    this.props.onSelection(this.props.identifier, nextState);
  }

  render(){
    return(
      <Col xs={4}>
        <Form.Check
          inline 
          label={this.props.identifier} 
          id={`inline-checkbox-${this.props.identifier}`} 
          type="checkbox" 
          onChange={this.onChange} 
          checked={this.props.selected}
        />
      </Col>
      )
  }
}

Tag.propTypes = {
  id: propTypes.number,
  identifier: propTypes.string,
  selected: propTypes.bool,
  onSelection: propTypes.func
}

export default Tag

