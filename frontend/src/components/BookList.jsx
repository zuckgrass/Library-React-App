import React from 'react';
import _ from 'lodash';
import Book from './Book';

const BookList = ({ books, setBooks}) =>{
	const handleRemoveBook = (id) => {
		fetch(`http://localhost:3001/books/${id}`, {
			method: "DELETE",
		})
		.then((response) => response.json())
		.then((data) => {
			setBooks(books.filter((book) => book._id !== id));
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
			books.map((book) =>(
			<Book key={book._id} {...book} handleRemoveBook={handleRemoveBook} />
			))
			) : (
				<tr><td colSpan="4" className="message">No books available</td></tr>
			)}
		</tbody>
		</table>
		
	)
}
	
export default BookList;