import express from "express";
import fs from "fs";
import cors from "cors";
import movieRoutes from "./routes/movies.js";

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.static("public"));

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})    