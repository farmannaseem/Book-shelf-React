import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BookSearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => setBooks(response.data.docs))
        .catch(error => console.error(error));
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <BookList books={books} addToBookshelf={addToBookshelf} />
      <button onClick={() => window.location.href='/bookshelf'}>Go to Bookshelf</button>
    </div>
  );
};

export default BookSearchPage;
