import React, {Component} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class AuthorDetails extends Component{
  constructor(props){
    super(props);

    this.state = {
      authorName: '',
      authorRating: null,
      books: [],
      error: '',
    }
  }

  componentDidMount(){
    const authorDetails = `/api/authors/${this.props.match.params.id}`
    axios.get(authorDetails).then((response) =>{
      this.setState({
        authorName: response.data.name,
        authorRating: response.data.avgRating,
        books: response.data.books
      });
    })
    .catch(error => {
      this.setState({error: error.message});
    })
  }

  render(){
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    const topics = this.state.books.map((book) => {
      return (
        book.tags.map(tag => tag.identifier)
      )
    }).flat().filter(onlyUnique).join(', ')
    const authorsBooks = this.state.books.map((book) => {
      return (
        <tr>
          <td>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </td>
        </tr>
        
      )
    })

    const displayRating = (this.state.authorRating * 100) / 100
    return(
      <div>
      <h2>{this.state.authorName}</h2>
      <h4>Average Rating: {Math.round(displayRating)}</h4>
      <h5>Topics Covered: {topics}</h5>
      <Table>
        <thead>
          <tr>
            <th>
              Works
            </th>
          </tr>
        </thead>
        <tbody>
          {authorsBooks}
        </tbody>
      </Table>
    </div>
    )
  }

}
export default AuthorDetails