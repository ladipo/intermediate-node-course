import express from "express";
//const express= require('express');
import mongoose from "mongoose";
//const mongoose= require('mongoose');
import bodyParser from "body-parser";
//const bodyParser = require("body-parser");
import User from "../models/User.js";

mongoose.connect("mongodb://localhost/userData");

const port = 8000;
const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});

// CREATE
app.post("/users", (req, res) => {
  // User.create()
});

app
  .route("/users/:id")
  // READ
  .get((req, res) => {
    // User.findById()
  })
  // UPDATE
  .put((req, res) => {
    // User.findByIdAndUpdate()
  })
  // DELETE
  .delete((req, res) => {
    // User.findByIdAndDelete()
  });
