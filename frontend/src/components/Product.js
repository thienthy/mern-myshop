import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded d-flex">
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top" alt={product.name} />
      </Link>
      <Card.Body className="p-4">
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
