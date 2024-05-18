import { db } from "../db.js";

export const fetchClass = (req, res) => {
    const q = "SELECT * FROM tusul_angilal";
    db.query(q, (err, results) => {
      if (err) {
          res.status(500).send('Error fetching data');
      } else {
          res.json(results);
      }
    });
  };


  export const fetchProFinance = (req, res) => {
    const q = "SELECT * FROM tusul_sanhuu";
    db.query(q, (err, results) => {
      if (err) {
          res.status(500).send('Error fetching data');
      } else {
          res.json(results);
      }
    });
  };


  export const fetchProStatus = (req, res) => {
    const q = "SELECT * FROM tusul_tuluv";
    db.query(q, (err, results) => {
      if (err) {
          res.status(500).send('Error fetching data');
      } else {
          res.json(results);
      }
    });
  };