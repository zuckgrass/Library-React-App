import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';
import EditBook from '../components/EditBook';
import { Navigate } from "react-router-dom";
import useBooks from "./useBooks";

const AppRouter = () =>{
        const [books,setBooks] =useBooks();
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="main-content">
                        <Routes>
                            <Route element={<BookList books={books} setBooks={setBooks}/>} exact path="/"/>
                            <Route element={<AddBook books={books} setBooks={setBooks}/>} path="/addbook" />   
                            <Route element={<EditBook books={books} setBooks={setBooks} />} path="/edit/:_id" />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

export default AppRouter;