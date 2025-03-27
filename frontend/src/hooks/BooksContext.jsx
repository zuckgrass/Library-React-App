import { createContext, useState, useContext, useEffect } from 'react';

const BooksContext = createContext();

export const BooksProvider = ({children}) =>{
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/books")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error("Error fetching books:", error));
    }, []);

    const addBook = (newBook) =>{
        setBooks([...books, newBook]);
    }

    const editBook = (_id, updatedBook) =>{
        setBooks((prevBooks) => prevBooks.map((book) => 
            book._id === _id ? updatedBook : book
        ));
    }

    const deleteBook = (_id) =>{
        setBooks((prevBooks) => prevBooks.filter(book => book._id !== _id));
    }

    return(
        <BooksContext.Provider value={{books, addBook, editBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksContext;