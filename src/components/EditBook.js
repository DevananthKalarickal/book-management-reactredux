import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap'; // Import Card for styling
import { editBook } from '../redux/booksSlice';

const EditBook = ({ currentBook, onClose }) => {
  const [title, setTitle] = useState(currentBook.title);
  const [author, setAuthor] = useState(currentBook.author);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id: currentBook.id, title, author };
    dispatch(editBook(updatedBook));
    onClose();
  };

  return (
    <Card className="shadow" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <Card.Body>
        <h5 className="text-center text-success">Edit Book Details</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              className="border-success" // Green border
            />
          </Form.Group>
          <Form.Group controlId="formBookAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="border-success" // Green border
            />
          </Form.Group>
          <div className="d-flex justify-content-between mt-3"> {/* Flexbox for button alignment */}
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditBook;
