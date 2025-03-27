import React from 'react';
import BookForm from './BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  BooksContext from "../hooks/BooksContext";
import {useContext} from "react";

const EditBook =() =>{
    const {_id} = useParams();
    const context =useContext(BooksContext);
    const {editBook} = context;
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/books/${_id}`)
            .then((response) => response.json())
            .then ((data)=>setBook(data))
            .catch((error) => console.error("Error fetching book:", error));
    }, [_id]);

    const handleOnSubmit = (updatedBook) => {
        fetch(`http://localhost:3001/books/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBook)
        })
            .then((response) => response.json())
            .then(() => {
                editBook(_id, updatedBook);
                navigate('/');
            })
            .catch((error) => console.error("Error updating book:", error));
    };

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <BookForm handleOnSubmit={handleOnSubmit} book={book} />
    );
}

export default EditBook;