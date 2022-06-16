const ADDBOOK = 'book-store/books/ADD BOOK';
const REMOVEBOOK = 'book-store/books/REMOVE BOOK';
const SETLOADING = 'book-store/books/SET LOADING';
const GETBOOKS = 'book-store/books/GET BOOK';

const defaultState = {
  loading: false,
  books: [],
};

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADDBOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVEBOOK:
      return {
        ...state,
        books: state.books.filter((el) => el.item_id !== action.itemid),
      };
      case SETLOADING:
      return { ...state, loading: action.loading };
      case GETBOOKS:
        return { ...state, books: [...action.books] };
      default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADDBOOK, book };
}

export function removeBook(index) {
  return { type: REMOVEBOOK, index };
}

export function getBooks() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/38b59qFydtEoTzEgXCix/books')
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => `Loading Failed. ${error}`);
    const books = [];
    const tempArr = JSON.parse(response);
    Object.keys(tempArr).forEach((e) => {
      books.push({ ...tempArr[e][0], item_id: e });
    });
    dispatch(setLoading(false));
    dispatch({ type: GETBOOKS, books });
  };
}