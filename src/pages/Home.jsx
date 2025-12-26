import {useState} from "react";
import {searchBooks} from "../api/bookApi";
import BookCard from "../components/BookCard";

function Home(){
    const[query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () =>{
        const books = await searchBooks(query);
        setResults(books)
    };

    const handleAddToLibrary = (book) => {
        console.log("Added to library", book)
    }

    return (
        <div>
            <h1>Søk etter bøker</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Søk</button>

            {/* Her vises søkeresultatene */}
            <div>
                {results.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onAdd={handleAddToLibrary}
                    showAdd={true}
                />
                ))}
            </div>
        </div>
  );
}

export default Home;