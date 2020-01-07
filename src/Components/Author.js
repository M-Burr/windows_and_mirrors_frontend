import React, {Component} from 'react';
import propTypes from 'prop-types';

class Author extends Component{
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      averageRating: this.props.averageRating
    }
  }

  render() {
    return (
      <section>
        <h1>Name: {this.props.name}</h1>
        <p>Average Rating: {this.props.averageRating}</p>
      </section>
    )
  }
}

Author.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  averageRating: propTypes.number.isRequired
}

export default Author