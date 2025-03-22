import React from 'react';
import BookForm from './BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditBook =({ books, setBooks}) =>{
    const {_id} = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/books/${_id}`)
            .then((response) => response.json())
            .then((data) => setBook(data))
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
            .then((data) => {
                // Update the book in the books state
                const updatedBooks = books.map((b) => (b._id === _id ? data : b));
                setBooks(updatedBooks);
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