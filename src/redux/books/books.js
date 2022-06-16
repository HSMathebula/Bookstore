const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'Bookstore/books/DELETE_BOOK';

const initialState = {
  books: [],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.book.id),
      };
    default:
      return state;
  }
};