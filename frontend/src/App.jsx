import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
      fetch("http://localhost:3001/books")
          .then(response => {
              if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => setBooks(data))
          .catch(error => console.error("Error fetching books:", error));
  }, []);
  return [books,setBooks];
}

export default App;
