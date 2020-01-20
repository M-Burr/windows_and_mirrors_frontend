import React, {Component} from 'react';
import { Row, Table } from 'react-bootstrap';
import Author from './Author.js';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Authors extends Component {
  constructor(props){
    super(props);

    this.state = {
      authorList: [],
      error: ''
    }
  }

  componentDidMount() {
    const authors = '/api/authors'
    axios.get(authors).then((response) => {
      
      this.setState({
        authorList: response.data
      });
      console.log(response.data)

    })
    .catch((error) => {
      this.setState({error: error.message});
      console.log(error.message)
    });
  }

  render () {
    let allAuthors = this.state.authorList.map((author, i) => {
      return (
      <tr key={i}>
        <td>
          <Link to={`authors/${author.id}`}>{author.name}</Link>
        </td>
        <td>
          {author.avgRating}
        </td>
      </tr>
      )
    })
    return (
      <Table striped bordered>
        <thead>
          <tr>
            <th>
              Author Name
            </th>
            <th>
              Author Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {allAuthors}
        </tbody>
      </Table>
    )
  }
  
}

export default Authors