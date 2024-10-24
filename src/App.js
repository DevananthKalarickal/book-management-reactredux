import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import EditBook from './components/EditBook';

const App = () => {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <Container className="my-5">
      <h1 className="text-center">Book Management System</h1>
      {editingBook ? (
        <EditBook currentBook={editingBook} onClose={() => setEditingBook(null)} />
      ) : (
        <AddBook />
      )}
      <BookList onEdit={(book) => setEditingBook(book)} />
    </Container>
  );
};

export default App;
