# Library React App
 Library Management Application
 
1. Make sure you have MongoDB installed on your local server. You can download MongoDB from the official website: [MongoDB](https://www.mongodb.com/try/download/community).

2. After installing MongoDB, start the server on your computer:
```bash
mongod
```

3. Create a `.env` file in the root folder of your project.

4. Add the following settings to the `.env` file:
```environment
PORT=3001
MONGODB_URI=mongodb://localhost:27017/your_database_name
```

- `your_database_name` is the name of your database.

5. The project will now connect to your local MongoDB.

How To Run The Project

1. Command for running server
```bash
cd src
cd backend
node server.js
```

2. Command for running frontend
```bash
cd src
cd frontend
npm run dev
```
