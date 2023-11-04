import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/api", require("./routes/contacts"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
