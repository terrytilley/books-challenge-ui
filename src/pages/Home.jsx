import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import api from '../api';
import BookList from '../components/BookList';

class Home extends Component {
  state = {
    loading: true,
    books: [],
  };

  async componentDidMount() {
    try {
      const { data } = await api.get('/books');
      this.setState({ books: data.results, loading: false });
    } catch (e) {
      this.setState({ books: [], loading: false });
    }
  }

  render() {
    return (
      <Container>
        {!this.state.loading ? (
          <React.Fragment>
            <h1>Books</h1>
            <BookList books={this.state.books} />
          </React.Fragment>
        ) : null}
      </Container>
    );
  }
}

export default Home;
