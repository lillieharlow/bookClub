import { useState } from "react";
import { useAppContext } from "./AppContext";
import Book from "./BookModel";

function BookForm({ book, onSave }) {
    const {dispatch } = useAppContext();
    const [title, setTitle] = useState(book ? book.title : '');
    const [author, setAuthor] = useState(book ? book.author : '');
    const [year, setYear] = useState(book ? book.year : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = new Book(book ? book.id : Date.now().toString(), title, author, year);

        if (book) {
            dispatch({ type: 'UPDATE_BOOK', payload: newBook });
        } else {
            dispatch({ type: 'ADD_BOOK', payload: newBook });
        }

        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
            />
            <button type="submit">{book ? "Update" : "Add"} Book</button>
        </form>
    );
}

export default BookForm;