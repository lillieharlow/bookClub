import React from "react";
import { useAppContext } from "./AppContext";

function BookList() {
  const { state, dispatch } = useAppContext();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_BOOK", payload: id });
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {state.books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
