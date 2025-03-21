import React from 'react';
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Book = ({
    _id,
    bookname,
    author,
    year,
    pages,
    handleRemoveBook
}) =>{
    const navigator = useNavigate();
    return(
        <tr className="book">
                <td className="book-title">{bookname} </td>
                <td>{author}</td>
                <td>{year}</td>
                <td>{pages}</td>
                <td><Button variant="primary" onClick={() => navigator(`/edit/${_id}`)}>Edit</Button>{' '}</td>
                <td><Button variant="danger" onClick={() => handleRemoveBook(_id)}>Delete</Button></td>
        </tr>
    )
}

export default Book;
