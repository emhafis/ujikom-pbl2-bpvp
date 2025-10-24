import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import siswaRoute from "./routes/siswaRoute.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(siswaRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(
    `Server Running on http://localhost:${PORT} - Muhammad Hafidz Arbanov PBL2`
  );
});
