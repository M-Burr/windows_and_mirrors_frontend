import React, {Component} from 'react';
import Author from './Author.js';
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
    const authors = 'http://localhost:8080/authors'
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
        <Author key={i} id={author.id} name={author.name} averageRating={author.avgRating} />
      )
    })
    return (
      <div>
        {allAuthors}
      </div>
    )
  }
  
}

export default Authors