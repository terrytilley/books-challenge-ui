import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BookListItem from '../BookListItem';

function BookList({ books }) {
  return (
    <Row>
      {books.map(book => (
        <Col sm={12} md={6} lg={4} key={book.id}>
          <BookListItem book={book} />
        </Col>
      ))}
    </Row>
  );
}

export default BookList;
