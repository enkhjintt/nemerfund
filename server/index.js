import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/project.js";
import financeRoutes from "./routes/finance.js";
import classRoutes from "./routes/projectClassRoutes.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
const secretKey = process.env.JWT_SECRET;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

// app.use("/files", express.static("files"));
// app.use("/images", express.static("images"));
// app.use('/', projectClassRoutes);

app.use("/auth", authRoutes);
app.use("/project", classRoutes);
app.use("/project", projectRoutes);
app.use("/finance", financeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});