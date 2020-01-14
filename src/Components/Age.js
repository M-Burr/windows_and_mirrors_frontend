import React, {Component} from 'react';
import propTypes from 'prop-types';

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
      <span>
        <input type="checkbox" onChange={this.onChange} ageChecked={this.props.selected}/>
        {this.props.age}
      </span>
    )
  }
  
}

Age.propTypes = {
  age: propTypes.number,
  selected: propTypes.bool,
  onAgesSelection: propTypes.func
}

export default Age

