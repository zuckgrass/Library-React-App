import React from 'react';
import _ from 'lodash';
import Book from './Book';
import { useContextBooks } from "../hooks/BooksContext";

const BookList = () =>{
	const context =useContextBooks();
	const { books, deleteBook} = context;
	const handleRemoveBook = (id) => {
		fetch(`http://localhost:3001/books/${id}`, {
			method: "DELETE",
		})
		.then((response) => response.json())
		.then((data)=>books.filter(book => book!== data))
		.then(() => {
			deleteBook(id);
		})
		.catch((error) => console.error("Error deleting book:", error));
	};
	
    return(
		<table className="table table-bordered">
		<thead>
		  <tr>
			<th>Name</th>
			<th>Author</th>
			<th>Year</th>
			<th>Pages</th>
		  </tr>
		</thead>
		<tbody>
			{!_.isEmpty(books) ? (
			books.map((book, index) =>(
			<Book key={book._id || book.id || index} {...book} handleRemoveBook={handleRemoveBook} />
			))
			) : (
				<tr><td colSpan="4" className="message">No books available</td></tr>
			)}
		</tbody>
		</table>
		
	)
}
	
export default BookList;