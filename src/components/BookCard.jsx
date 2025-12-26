import React from "react";

function BookCard({book, onAdd, onRemove, showAdd = true}){
    const info = book.volumeInfo;

    return(
        <div className="book-card">
            <img src={info.imageLinks?.thumbnail} alt={info.title} />   
            <div>
                <h3>{info.title}</h3>
                <p><strong>Forfatter:</strong> {info.authors?.join(", ") || "Ukjent"}</p>
                <p>{info.description?.slice(0, 150)}...</p>

                {showAdd ? (
                <button onClick={() => onAdd(book)}>📚 Legg til i bibliotek</button>
                ) : (
                <button onClick={() => onRemove(book)}>❌ Fjern</button>)}
            </div>
        </div>
    )
}
export default BookCard;
