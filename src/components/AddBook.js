import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap'; // Import Card for styling
import { addBook } from '../redux/booksSlice';

let bookIdCounter = 1; // Initialize a counter for unique IDs

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a unique ID using the counter
    const newBookId = bookIdCounter++;
    dispatch(addBook({ id: newBookId, title, author }));
    
    // Reset input fields
    setTitle('');
    setAuthor('');
  };

  return (
    <Card className="shadow" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <Card.Body>
        <h5 className="text-center text-success">Add a New Book</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="border-success" // Green border
              style={{ boxShadow: 'none' }} // Remove Bootstrap default shadow
            />
          </Form.Group>
          <Form.Group controlId="formBookAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author"
              className="border-success" // Green border
              style={{ boxShadow: 'none' }} // Remove Bootstrap default shadow
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100 mt-3">
            Add Book
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddBook;
