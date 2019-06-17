import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import api from '../api';
import SingleBook from '../components/SingleBook';

class Book extends Component {
  state = {
    loading: true,
    book: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const { data } = await api.get(`/books/${id}`);
      this.setState({ book: data.results, loading: false });
    } catch (e) {
      this.setState({ book: null, loading: false });
    }
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            {!this.state.loading ? <SingleBook book={this.state.book} /> : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Book;
