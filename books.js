const { json } = require("express");
const db = require("./db");

const createBook = (req, res) => {
  const { title, author, published_at, price } = req.body;

  const query = `INSERT INTO books (title, author, published_at, price) VALUES (?,?,?,?)`;
  const arr = [title, author, published_at, price];
  db.query(query, arr, (err, result) => {
    if (err) throw err;
    console.log("result", result);
    res.json(result);
  });
};

const getAllBook = (req, res) => {
  const query = `SELECT * FROM books;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("result", result);
    res.json(result);
  });
};

const updateBooks = (req, res) => {
  console.log("dasdsa");

  const { title, author, published_at, price } = req.body;
  const id = req.params.id;

  console.log(id);
  const query = `UPDATE books
  SET title = ? ,author = ? , published_at = ? , price= ? 
  WHERE id = ${id} `;
  const arr = [title, author, published_at, price];

  db.query(query, arr, (err, result) => {
    if (err) throw err;

    console.log("result", result);

    res.json(result);
  });
};

const deleteBook = async (req, res) => {
  console.log("dadadadasd");
  const id = req.params.id;
  const query = `DELETE FROM books WHERE id = ${id};`;
  await db.query(query, (err, result) => {
    if (err) throw err;
    console.log("result", result);
    res.json(result);
  });
};

const OrderedBooks = (req, res) => {
  const query = `SELECT * FROM books
    ORDER BY author DESC`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("result", result);
    res.json(result);
  });
};

const getAllBookNotHavePrice = (req, res) => {
  const query = `SELECT price 
    FROM books
    WHERE price IS NULL`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("result", result);
    res.json(result);
  });
};

const getAllBooksHavingPrice = (req, res) => {
  const query = `SELECT * 
    FROM books 
    HAVING price`;

  db.query(query, (err, result) => {
    if (err) throw err;

    console.log("result", result);

    res.json(result);
  });
};

module.exports = {
  createBook,
  getAllBook,
  updateBooks,
  deleteBook,
  OrderedBooks,
  getAllBookNotHavePrice,
  getAllBooksHavingPrice,
};
