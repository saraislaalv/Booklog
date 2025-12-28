import React from "react";
import "../styles.css";

function BookCard({book, onAdd, onRemove, showAdd = true, onRate, onNote, onStatus}){
    const info = book.volumeInfo;

    return(
        <div className="book-card">
            <img src={info.imageLinks?.thumbnail} alt={info.title} />   
            <div>
                <h3>{info.title}</h3>
                <p><strong>Forfatter:</strong> {info.authors?.join(", ") || "Ukjent"}</p>

                {showAdd ? null : (
                    <div>
                        <label>Rating: </label>
                        {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                            cursor: "pointer",
                            color: book.rating >= star ? "gold" : "gray",
                            }}
                            onClick={() => onRate && onRate(book.id, star)}
                        >
                            ★
                        </span>
                        ))}
                    </div>
                )}

                {showAdd ? null : (
                <div style={{ marginTop: "10px" }}>
                    <textarea
                    value={book.note || ""}
                    onChange={(e) => onNote && onNote(book.id, e.target.value)}
                    placeholder="Skriv noe om boken..."
                    rows={3}
                    style={{ width: "100%", resize: "vertical" }}
                    />
                </div>
                )}

                {showAdd ? null : (
                <div style={{ marginTop: "10px" }}>
                    <label>Lesestatus: </label>
                    <select
                    value={book.status}
                    onChange={(e) => onStatus && onStatus(book.id, e.target.value)}
                    >
                    <option value="Planlagt">📌 Planlagt</option>
                    <option value="Leser nå">📖 Leser nå</option>
                    <option value="Ferdig">✅ Ferdig</option>
                    </select>
                </div>
                )}

                <br />      

                {showAdd ? (
                    <button onClick={() => onAdd(book)}>📚 Legg til i bibliotek</button>
                    ) : (
                    <button onClick={() => onRemove(book)}>❌ Fjern</button>
                )}

            </div>
        </div>
    )
}
export default BookCard;
