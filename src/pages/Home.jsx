import { useState } from "react";
import { searchBooks } from "../api/bookApi";
import { useLibrary } from "../context/LibraryContext";
import BookCard from "../components/BookCard";
import "../styles.css"

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const { addBook } = useLibrary();

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const books = await searchBooks(query);
      setResults(books);
    } catch (error) {
      console.error("Feil ved søk:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToLibrary = (book) => {
    const bookWithData = {
      ...book,
      rating: 0,
      note: "",
      status: "Planlagt",
    };
    addBook(bookWithData);
    setConfirmationMessage(`"${book.volumeInfo.title}" ble lagt til i biblioteket ✅`);
    setTimeout(() => setConfirmationMessage(""), 3000);
  };
  
  
  

  return (
    <div>
        <h1 className="page-header">Søk etter bøker</h1>
        <div className="search-page">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                className="search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Skriv inn boktittel"
                />
                <button className="search-button" type="submit">
                Søk
                </button>
            </form>

            {confirmationMessage && (
                <p className="confirmation-message">{confirmationMessage}</p>
            )}

            <div className="search-results">
                {isLoading ? (
                <p>Søker...</p>
                ) : (
                results.map((book) => (
                    <BookCard
                    key={book.id}
                    book={book}
                    onAdd={handleAddToLibrary}
                    showAdd={true}
                    />
                ))
                )}
            </div>
        </div>
    </div>

  );
}

export default Home;
