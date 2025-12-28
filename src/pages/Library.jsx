import React from "react";
import BookCard from "../components/BookCard";
import { useLibrary } from "../context/LibraryContext";
import "../styles.css";

function Library() {
    const { library, removeBook, updateRating, updateNote, updateStatus} = useLibrary();
    const plannedBooks = library.filter((book) => book.status === "Planlagt");
    const readingBooks = library.filter((book) => book.status === "Leser nå");
    const finishedBooks = library.filter((book) => book.status === "Ferdig");


    return (
        <div>
            <h1 class="page-header">Mitt bibliotek</h1>

            <div className="library-columns">
                {/* Planlagt */}
                <div className="library-column">
                    <h2>📌 Planlagt</h2>
                    {plannedBooks.length === 0 ? (
                        <p>Ingen bøker.</p>
                    ) : (
                        plannedBooks.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onRemove={removeBook}
                            onRate={updateRating}
                            onNote={updateNote}
                            onStatus={updateStatus}
                            showAdd={false}
                        />
                        ))
                    )}
        </div>

        {/* Leser nå */}
        <div className="library-column">
            <h2>📖 Leser nå</h2>
            {readingBooks.length === 0 ? (
                <p>Ingen bøker.</p>
            ) : (
                readingBooks.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onRemove={removeBook}
                    onRate={updateRating}
                    onNote={updateNote}
                    onStatus={updateStatus}
                    showAdd={false}
                />
                ))
            )}
        </div>

        {/* Ferdig */}
        <div className="library-column">
            <h2>✅ Ferdig</h2>
            {finishedBooks.length === 0 ? (
                <p>Ingen bøker.</p>
            ) : (
                finishedBooks.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onRemove={removeBook}
                    onRate={updateRating}
                    onNote={updateNote}
                    onStatus={updateStatus}
                    showAdd={false}
                />
                ))
            )}
        </div>
    </div>
    </div>

    );
}

export default Library;
