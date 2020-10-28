const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "Forecast",
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password =?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send({ result, loginSuccess: true });
        } else {
          res.send({ loginSuccess: false });
        }
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server...");
});
