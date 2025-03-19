const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5174', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));


app.use(express.json());

// Example endpoint for getting items
app.get('/', (req, res) => {
  // Fetch items from database and send response
  res.json([
    { id: 1, bookname: 'Sherlock Holmes', author: 'Agatha Christie', year: 1903, pages:300 }, 
    { id: 2, bookname: 'Harry Potter', author: 'Joanne Rowling', year:2004, pages:400},
    { id:3, bookname: "React Begin", author: 'Sofiia Pisotska', year:2024, pages: 100}
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
