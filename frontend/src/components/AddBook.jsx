import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from "react-router-dom";
import { useContextBooks } from "../hooks/BooksContext";

const AddBook = () =>{
    const navigator = useNavigate();
    const context =useContextBooks();
    const {addBook} = context;
    const handleOnSubmit = (book) => {
        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                bookname: book.bookname,  
                author: book.author,
                year: Number(book.year),  
                pages: Number(book.pages) 
            }),
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.message) });
            }
            return response.json();
        })
        .then((data) => {
            addBook(data); 
            navigator("/"); 
        })
        .catch((error) => console.error("Error adding book:", error));
    };
    

    return(
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}
export default AddBook;