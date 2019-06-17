import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';

function BookListItem({ book }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={book.thumbnail}
        style={{ maxHeight: '180px' }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-success">
          <strong>Price:</strong> {book.price}
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <strong>In stock:</strong> {book.stockAmount}
        </ListGroupItem>
        <ListGroupItem>
          <Card.Link as={Link} to={`books/${book.id}`}>
            More details
          </Card.Link>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default BookListItem;
