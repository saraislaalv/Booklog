import React from "react";
import BookCard from "../components/BookCard";
import { useLibrary } from "../context/LibraryContext";

function Library() {
  const { library, removeBook, updateRating, updateNote, updateStatus} = useLibrary();

  return (
    <div>
      <h1>Mitt bibliotek</h1>
      {library.length === 0 ? (
        <p>Du har ikke lagt til noen bøker ennå.</p>
      ) : (
        library.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onRemove={removeBook}
            showAdd={false}
            onRate={updateRating}
            onNote={updateNote}
            onStatus={updateStatus}
          />
        ))
      )}
    </div>
  );
}

export default Library;
