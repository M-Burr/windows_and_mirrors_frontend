import React, {Component} from 'react';
import Tag from './Tag.js';
import propTypes from 'prop-types'
import axios from 'axios';
import { Row } from 'react-bootstrap';

class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagsList: [],
      error: ''
    }
  }

  componentDidMount() {
    const tags = '/api/searchcriteria'
    axios.get(tags).then((response) => {
      
      this.setState({
        tagsList: response.data
      });
    })
    .catch((error) => {
      this.setState({error: error.message});
    })
  }

  isTagSelected = (tagName) => {
    return this.props.selected.indexOf(tagName.toLowerCase()) > -1
  }

  onSelection = (identifier, nextState) => {
    this.props.onSelection(identifier, nextState)
  }

  render () {
    const allTags = this.state.tagsList.map((tag, i) => {
      const isSelected = this.isTagSelected(tag.identifier);
      return (
        <Tag key={i} identifier={tag.identifier} id={tag.id} selected={isSelected} onSelection={this.onSelection} />
      )
    })
    return (
      <Row>{allTags}</Row>
    )
  }
}

Tags.propTypes = {
  selected: propTypes.arrayOf(propTypes.string),
  onSelection: propTypes.func
}

export default Tags