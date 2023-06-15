const express = require("express");
const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

//connect to mysql
db.connect(() => {
  console.log("MYSQL  connected");
});
const app = express();

//create database
app.get("/createddb", (req, res) => {
  let sql = "CREATE DATABASE node";
  db.query(sql, () => {
    res.send("Database created");
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
