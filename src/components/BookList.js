import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { removeBook } from '../redux/booksSlice';
import BookDetailModal from './BookDetailModal'; // Import the modal component

const BookList = ({ onEdit }) => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Handle cases where books is not an array or empty
  if (!Array.isArray(books) || books.length === 0) {
    return <p className="text-center">No books available.</p>;
  }

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setShowModal(true); // Show the modal
  };

  return (
    <Container className="my-4"> {/* Container for spacing */}
      <Row className="g-4 justify-content-center"> {/* Center the Row */}
        {books.map((book) => (
          <Col sm={12} md={6} lg={4} key={book.id}>
            <Card className="h-100 shadow-sm" > {/* Handle click */}
              <Card.Body>
                <Card.Title className="text-center text-success" onClick={() => handleCardClick(book)}>{book.title}</Card.Title> {/* Centered and green title */}
                <Card.Subtitle className="mb-2 text-center">{book.author}</Card.Subtitle> {/* Centered author */}
                <div className="d-flex justify-content-between mt-3"> {/* Flexbox for button alignment */}
                  <Button variant="primary" onClick={() => onEdit(book)}>Edit</Button>
                  <Button variant="danger" onClick={() => dispatch(removeBook(book.id))}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Book Detail Modal */}
      {selectedBook && (
        <BookDetailModal
          show={showModal}
          onHide={() => setShowModal(false)}
          book={selectedBook}
        />
      )}
    </Container>
  );
};

export default BookList;
