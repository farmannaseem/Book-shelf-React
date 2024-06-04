import React, { useState, useEffect } from 'react';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div>
      <h2>My Bookshelf</h2>
      {bookshelf.length ? (
        bookshelf.map(book => (
          <div key={book.key}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No books in bookshelf.</p>
      )}
      <button onClick={() => window.location.href='/'}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
