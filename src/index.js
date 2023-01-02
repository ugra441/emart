import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

// Custom Imports
import dbError from './Errors/dbError.js';
// import router from './Routes/routes.js';

const app = express();
const PORT = process.env.PORT;

const db = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
db.connect(dbError);


app.get('/api/v1/books', (req, res) => {
  const q = 'SELECT * from books';
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get('/', (req, res) => {
  res.send('Hello Emart...!!!!');
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
