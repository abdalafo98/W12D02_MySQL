const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./db");
app.use(express.json());

const users = require("./users");
const books = require("./books");

app.get("/users", users.findAll);
app.get("/users/email", users.findByEmail);

app.post("/createBook", books.createBook);
app.get("/getBook", books.getAllBook);
app.put("/books/:id", books.updateBooks);
app.delete("/books/:id", books.deleteBook);
app.get("/books", books.OrderedBooks);
app.get("/books/price", books.getAllBookNotHavePrice);
app.get("/books/price/price", books.getAllBooksHavingPrice);

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
