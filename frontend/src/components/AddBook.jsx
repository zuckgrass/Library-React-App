import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from "react-router-dom";

const AddBook = ({books, setBooks}) =>{
    const navigator = useNavigate();
    const handleOnSubmit = (book) => {
        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })
        .then((response) => response.json())
        .then((data) => {
            setBooks([...books, data]); 
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