// const express = require("express");
// const router = express.router();
const fs = require("fs");
// module.exports = router;

function createTodo(todo) {
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" })
  );
  data.push(todo);
  fs.writeFileSync("./data.json", JSON.stringify(data));

  return todo;
}
function updateTodo(id, title) {
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" })
  );

  var todo = data.find(function (todo) {
    return todo.ID == id;
  });

  todo.title = title;
  fs.writeFileSync("./data.json", JSON.stringify(data));

  return todo;
}
module.exports = { createTodo, updateTodo };
