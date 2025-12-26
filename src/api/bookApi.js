//Bruker APIen til google books
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export async function searchBooks(query) {
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
    try{
        const res = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}&key=${apiKey}`);
        
        const data = await res.json();
        return data.items || [];
    } catch(error){
        console.error("Feil ved søk.");
        return [];
    }
}

export async function getBookDetails(params) {
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

    try{
        const res = await fetch(`${BASE_URL}/${bookId}?key=${apiKey}`);
        const data = await res.json();
        return data;

    } catch(error){
        console.error("Feil ved henting av bokdetaljer.");
        return null;
    }
}