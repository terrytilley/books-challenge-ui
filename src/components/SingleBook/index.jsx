import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

function SingleBook({ book }) {
  return (
    <Row>
      <Col md={12}>
        <Image
          src={book.thumbnail}
          thumbnail
          style={{ marginBottom: '1.5rem' }}
        />
        <h1 className="text-center" style={{ fontSize: '1.8rem' }}>
          {book.title}
        </h1>
        <p className="text-center text-primary">
          {book.author.firstName} {book.author.lastName}
        </p>
        <p style={{ marginBottom: '3rem' }}>{book.description}</p>
        <ListGroup>
          <ListGroup.Item>
            <strong>Price: </strong>
            <span>{book.price}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>In stock: </strong>
            <span>{book.stockAmount}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ISBN: </strong>
            <span>{book.isbn}</span>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default SingleBook;
