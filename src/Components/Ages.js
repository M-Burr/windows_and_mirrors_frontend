import React, {Component} from 'react';
import Age from './Age.js';
import propTypes from 'prop-types'
import "./Ages.css";

class Ages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agesList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }

  isAgeSelected = (age) => {
    return this.props.selected.indexOf(age) > -1
  }

  onAgesSelection = (age, nextState) => {
    this.props.onAgesSelection(age, nextState)
  }

  render () {
    const allAges = this.state.agesList.map((age, i) => {
      const isSelected = this.isAgeSelected(age);
      return (
        <Age key={i} age={age} selected={isSelected} onAgesSelection={this.onAgesSelection} />
      )
    })
    return (
      <div className="ages-list">{allAges}</div>
    )
  }

}


Ages.propTypes = {
  selected: propTypes.arrayOf(propTypes.string),
  onAgesSelection: propTypes.func
}

export default Ages