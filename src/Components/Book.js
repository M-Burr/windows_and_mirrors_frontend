import React, {Component} from 'react';
import propTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      author: this.props.author,
      isbn10: this.props.isbn10,
      summary: this.props.summary
    }
  }

  render(){
    return (
      <div>
       <h1>{this.props.title}</h1>
       <h2>{this.props.author}</h2>
       <p>{this.props.isbn10}</p>
        <p>{this.props.summary}</p>
      </div>
    )
  }
}


Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  isbn10: propTypes.string.isRequired,
  summary: propTypes.string.isRequired
}
export default Book