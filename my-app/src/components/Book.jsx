import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Book = ({
    id,
    bookname,
    author,
    year,
    pages,
    handleRemoveBook
}) =>{
    const navigator = useNavigate();
    return(
        
        <Card style={{width: '18rem'}} className="book">
            <Card.Body>
                <Card.Title className="book-title">{bookname} </Card.Title>
                <div className="book-details">
                    <div>Author: {author}</div>
                    <div>Year: {year}</div>
                    <div>Pages: {pages}</div>
                </div>
                <Button variant="primary" onClick={() => navigator(`/edit/${id}`)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveBook(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>

    )
}

export default Book;
