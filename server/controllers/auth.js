import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET;

//REGISTER
export const register = (req, res) => {
  const q = "SELECT * FROM hereglegch WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json(err);

      const insertQuery = "INSERT INTO hereglegch (ovog, ner, email, lojin_pass) VALUES (?, ?, ?, ?)";
      const values = [req.body.lname, req.body.fname, req.body.email, hashedPassword];

      db.query(insertQuery, values, (err, data) => {
        if (err) return res.status(500).json(err);

        const name = req.body.fname;
        const token = jwt.sign({ name }, secretKey, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true });

        return res.json({ Status: "Success" });
      });
    });
  });
};

//LOGIN
export const login = (req, res) => {
  const q = "SELECT email, lojin_pass FROM hereglegch WHERE email = ?";

  db.query(q, [req.body.email], async (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      console.log("User not found:", req.body.email);
      return res.status(404).json("User not found!");
    }

    const user = data[0];
    const passwordMatch = await bcrypt.compare(req.body.password, user.lojin_pass);

    if (!passwordMatch) {
      console.log("Wrong email or password:", req.body.email);
      return res.status(400).json("Wrong email or password!");
    }

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1d' });
    const { lojin_pass, ...other } = user;

    res.cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ Status: "Success", user: other });
  });
};


//VERIFY USER
export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ Error: "Token required" });
  } else {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ Error: "Invalid token" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};
