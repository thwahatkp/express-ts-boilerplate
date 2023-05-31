import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import 'dotenv/config'
// dotenv.config();
import './database/connection'


var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.listen(3099,()=>{
    console.log(`server is running ${3099}`)
})

export default app;
