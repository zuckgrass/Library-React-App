import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import EditBook from './components/EditBook';
import { Navigate } from "react-router-dom";
import { BooksProvider } from "./hooks/BooksContext";

function App() {
  return(
    <BooksProvider>
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route element={<BookList />} exact path="/"/>
                        <Route element={<AddBook />} path="/addbook" />   
                        <Route element={<EditBook />} path="/edit/:_id" />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
