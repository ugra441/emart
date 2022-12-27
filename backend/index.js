import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Keerthana448@123',
  database: 'emart',
});

app.get('/api/v1/', (req, res) => {
  res.json({ message: 'success' });
});

app.get('/api/v1/books', (req, res) => {
  const q = 'SELECT * from books';
  db.query(q, (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`server running at PORT: ${PORT}`);
});
