const express = require("express");
const fs = require("fs");
const { createTodo, updateTodo } = require("../controllers/todos");
const Router = express.Router();
const todoModel = require("../models/todos");
const router = require("./users");

// router.post("/", async (req, res, next) => {
//   var todo = req.body;
//   var savedTodo = await todoModel.create(todo);
//   res.status(201).json(savedTodo);
// });

router.get("/", async (req, res, next) => {
  //endpoint // rout get todo
  // const data = JSON.parse(
  //   fs.readFileSync("./data.json", { encoding: "utf-8" })
  // );
  todos = await todoModel.find();
  res.json(todos);
});

Router.get("/todo/:id", (req, res, next) => {
  var { id } = req.params.id;
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" })
  );
  var todo = data.find(function (todo) {
    return todo.ID == id;
  });
  console.log(todo);
  res.json(todo);
});

//post//////////////////////////////////////////////////////////////////////////////////////////////////////////

Router.post("/", async (req, res, next) => {
  //save todo
  var todo = req.body;
  // console.log(todo);
  // var newTodo = createTodo(todo);

  try {
    var savedTodo = await todoModel.create(todo);

    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(422).json({ massage: err.massage });
  }
});

///patch///////////////////////////////////////////////////////////////////////////////////////////////////////

Router.patch("/:id", async (req, res) => {
  var id = req.params.id;
  var { title } = req.body;
  // var updatedTodo = updateTodo(id, title);
  try {
    await todoModel.updateOne({ _id: id }, { title: title });
    res.json(updatedTodo);
  } catch (err) {
    res.status(422).json({ massage: err.massage });
  }
});
module.exports = Router;
