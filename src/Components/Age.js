import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Form, Badge } from 'react-bootstrap';

export class Age extends Component {
  constructor(props){
    super(props);

    this.state = {
      age: this.props.age
    }
  }

  onChange = (e) => {
    const nextState = e.target.checked;
    this.props.onAgesSelection(this.props.age, nextState);
  }

  render(){
    return(
      <Form.Check 
        className="age-check"
        inline 
        label={this.props.age} 
        id={`inline-checkbox-${this.props.age}`} 
        type="checkbox" 
        onChange={this.onChange} 
        ageChecked={this.props.selected}
      />
    )
  }
  
}

Age.propTypes = {
  age: propTypes.number,
  selected: propTypes.bool,
  onAgesSelection: propTypes.func
}

export default Age

