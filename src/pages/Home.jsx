import { useState } from "react";
import { searchBooks } from "../api/bookApi";
import { useLibrary } from "../context/LibraryContext";
import BookCard from "../components/BookCard";

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
      <h1>Søk etter bøker</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Skriv inn boktittel"
        />
        <button type="submit">Søk</button>
      </form>

      {confirmationMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>{confirmationMessage}</p>
        )}


      <div>
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
  );
}

export default Home;
