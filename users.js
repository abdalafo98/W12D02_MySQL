const db = require("./db");

const findAll = (req, res) => {
  const query = ` SELECT * FROM users`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const findByEmail = (req, res) => {
  const query = `SELECT email FROM users`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("Result", result);
    res.json(result);
  });
};

module.exports = {
  findAll,
  findByEmail,
};
