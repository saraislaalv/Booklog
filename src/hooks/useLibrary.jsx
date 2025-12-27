import { useEffect, useState } from "react";

const STORAGE_KEY = "myLibrary";

export function useLibrary() {
  const [library, setLibrary] = useState([]);

  // Laster fra localStorage én gang når appen starter
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setLibrary(JSON.parse(stored));
    }
  }, []);

  // Lagrer til localStorage hver gang library endres
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
  }, [library]);

  const addBook = (book) => {
    // Ikke legg til samme bok to ganger
    if (!library.find((b) => b.id === book.id)) {
      setLibrary([...library, book]);
    }
  };

  const removeBook = (book) => {
    setLibrary(library.filter((b) => b.id !== book.id));
  };

  return { library, addBook, removeBook };
}
