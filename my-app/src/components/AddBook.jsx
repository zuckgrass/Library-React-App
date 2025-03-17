import React from 'react';
import BookForm from './BookForm';
import { useNavigate } from "react-router-dom";

const AddBook = ({books, setBooks}) =>{
    const navigator = useNavigate();
    const handleOnSubmit = (book) =>{
        setBooks([...books, book]);
        navigator('/');
    }

    return(
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}
export default AddBook;