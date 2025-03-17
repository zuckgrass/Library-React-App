import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';

const AppRouter = () =>{
        const [books, setBooks] = useLocalStorage('books', []);
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="main-content">
                        <Routes>
                            <Route element={<BookList books={books} setBooks={setBooks}/>} exact path="/"/>
                            <Route element={<AddBook books={books} setBooks={setBooks}/>} path="/addbook" />   
                            <Route element={<EditBook books={books} setBooks={setBooks} />} path="/edit/:id" />
                            <Route element={() => <Redirect to="/" />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

export default AppRouter;