require("dotenv").config();

const express = require("express");
const server = express();
const router = require("./router");

server.get("/", (request, response) => {
    response.json({message: "TOBS API"});
});

server.use(express.json());
server.use(router);

server.listen(3001, () => {
    console.log("running...");
});