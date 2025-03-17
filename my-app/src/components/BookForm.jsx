import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const BookForm = (props) =>{
    const [book, setBook] =useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        year: props.book ? props.book.year : '',
        pages: props.book ? props.book.pages : ''
    })

const [errorMsg, setErrorMsg] = useState('');
const {bookname, author, year, pages} = book;

const handleOnSubmit = (event) =>{
    event.preventDefault();
    const values =[bookname, author, year, pages];
    let errorMsg='';

    const allFieldsFilled = values.every((field) =>{
        const value = `${field}`.trim();
        return value!=='' && value!=='0';
    });

    if(allFieldsFilled){
        const book ={
            id : uuidv4(),
            bookname,
            author,
            year,
            pages
        };
        props.handleOnSubmit(book);
    }
    else{
        errorMsg ="Please fill out all the fields!";
    }
    setErrorMsg(errorMsg);
};

const handleInputChange = (event) =>{
    const {name, value} = event.target;
    switch(name){
        case 'year':
            if((value === '' || parseInt(value) === +value) && value<='2025'){
                setBook((prevState)=>({
                    ...prevState,
                    [name]: value
                }));
            }
            break;
        case 'pages':
            if(value === '' || parseInt(value) === +value){
                setBook((prevState)=>({
                    ...prevState,
                    [name]: value
                }));
            }
            break;
        default:
            setBook((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }
}

return (
    <div className = "main-form">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="bookname"
                    value={bookname}
                    placeholder="Enter name of book"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="author">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="author"
                    value={author}
                    placeholder="Enter name of author"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                    className="input-control"
                    type="number"
                    name="year"
                    value={year}
                    placeholder="Enter publication year"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="pages">
                <Form.Label>Pages Count</Form.Label>
                <Form.Control
                    className="input-control"
                    type="number"
                    name="pages"
                    value={pages}
                    placeholder="Enter number of pages"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
                Submit New Book
            </Button>
        </Form>
    </div>
)
}
export default BookForm;