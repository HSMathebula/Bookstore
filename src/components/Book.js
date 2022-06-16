import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { deleteBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={() => dispatch(deleteBook(id))} type="button">
        Remove
      </button>
    </>
  );
};
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};