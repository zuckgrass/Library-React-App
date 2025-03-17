import React from 'react';
import BookForm from './BookForm';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EditBook =({ books, setBooks}) =>{
    const {id} = useParams();
    const navigator = useNavigate();
    const bookToEdit = books.find((book) => book.id===id);

    const handleOnSubmit = (book) =>{
        const filteredBooks = books.filter((book) => book.id !== id);
        setBooks([book, ...filteredBooks]);
        navigator('/');
    }

    return (
        <div>
            <BookForm book ={bookToEdit} handleOnSubmit ={handleOnSubmit} />
        </div>
    )
}

export default EditBook;