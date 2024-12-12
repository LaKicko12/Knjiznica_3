const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const axios = require("axios");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "ucka.veleri.hr",
  user: "esimonovic",
  password: "11",
  database: "esimonovic",
});

//novo
app.use(cors({ origin: "http://localhost:9000" }));

app.use(express.urlencoded({ extended: true }));

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/api/knjige", (req, res) => {
  //req  - slanje zahtjeva s klijentske strane, res - slanje odgovora sa serverske strane
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/api/knjige/:naslov", (req, res) => {
  //req  - slanje zahtjeva s klijentske strane, res - slanje odgovora sa serverske strane
  const naslov = req.params.naslov;
  connection.query(
    "SELECT * FROM knjiga WHERE naslov = ?",
    naslov,
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

/*
  app.get("/api/knjige/:id", (req, res) => {
    const id= req.params.id;
  //  res.send("jedna knjiga "+id);
  });*/

app.post("/api/rezerv_knjige", (req, res) => {
  const data = req.body;
  rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]];
  connection.query(
    "INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?",
    [rezervacija],
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
  // res.send("poslano"+data.id_knjiga);
});

app.listen(port, () => {
  console.log("Server running at port: " + port);
});

axios
  .get("http://localhost:3000/api/knjige/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error loading books:", error);
  });
