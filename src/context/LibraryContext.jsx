import { createContext, useContext, useEffect, useState } from "react";

const LibraryContext = createContext();

const STORAGE_KEY = "myLibrary";

export function LibraryProvider({ children }) {
    const [library, setLibrary] = useState([]);
    const [isReady, setIsReady] = useState(false); // 👈 nytt
  
    useEffect(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setLibrary(JSON.parse(stored));
      }
      setIsReady(true); // 👈 signaliserer at vi er ferdige
    }, []);
  
    useEffect(() => {
      if (isReady) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
      }
    }, [library, isReady]); // 👈 legg til isReady  

  const addBook = (book) => {
    if (!library.find((b) => b.id === book.id)) {
      console.log("✅ Bok lagt til i context:", book); // <- Debug
      setLibrary([...library, book]);
    } else {
      console.log("🚫 Bok finnes allerede");
    }
  };

  const removeBook = (book) => {
    setLibrary(library.filter((b) => b.id !== book.id));
  };

  const updateRating = (bookId, newRating) => {
    setLibrary((prev) =>
      prev.map((book) =>
        book.id === bookId ? { ...book, rating: newRating } : book
      )
    );
  };

  const updateNote = (bookId, newNote) => {
    setLibrary((prev) =>
      prev.map((book) =>
        book.id === bookId ? { ...book, note: newNote } : book
      )
    );
  };
  
  const updateStatus = (bookId, newStatus) => {
    setLibrary((prev) =>
      prev.map((book) =>
        book.id === bookId ? { ...book, status: newStatus } : book
      )
    );
  };
  

  return (
    <LibraryContext.Provider value={{ library, addBook, removeBook, updateRating, updateNote, updateStatus }}>
      {children}
    </LibraryContext.Provider>
    
  );
}

export function useLibrary() {
    return useContext(LibraryContext);
  }
  