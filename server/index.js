const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userInfo",
    secret: "shimyuseob",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24000,
    },
  })
);

// parse application/json
// app.use(bodyParser.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "Forecast",
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("userInfo");

  res.redirect("/");
  //Hmm...
});

app.post("/write", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const title = req.body.title;
  const desc = req.body.desc;
  const date = req.body.date;

  db.query(
    "INSERT INTO lists (name, email, title, description, date) VALUES (?,?,?,?,?)",
    [name, email, title, desc, date],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
            // res.redirect("/");
          } else {
            res.send({ loginSuccess: false });
          }
        });
        // res.send({ result, loginSuccess: true });
      } else {
        res.send({ loginSuccess: false });
      }
    }
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/lists", (req, res) => {
  db.query("SELECT * FROM lists", function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      // console.log(rows);
      res.send(rows);
    }
  });
});

app.listen(3001, () => {
  console.log("running server...");
});
