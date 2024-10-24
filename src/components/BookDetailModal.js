// src/components/BookDetailModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookDetailModal = ({ show, onHide, book }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Author:</strong> {book.author}</p>
        {/* Add more details about the book if necessary */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetailModal;
