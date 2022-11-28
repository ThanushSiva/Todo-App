require("dotenv").config()
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const connect = require("./config/db");
const router = require("./router/todoRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();

app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log(`Listening in port ${process.env.PORT}`);
})