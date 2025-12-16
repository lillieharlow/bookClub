import React, { useState } from 'react';
import { AppProvider } from './AppContext';
import BookList from './BookList';
import BookForm from './BookForm';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSave = () => {
    setSelectedBook(null);
  };

  return (
    <AppProvider>
      <div className="App">
        <h1>Book Management App</h1>
        <BookForm book={selectedBook} onSave={handleSave} />
        <BookList onEdit={setSelectedBook} />
      </div>
    </AppProvider>
  );
}

export default App;