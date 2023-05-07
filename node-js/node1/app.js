// const { json } = require("express");
const express = require("express");
const fs = require("fs");
const app = express();
const todosRoutes = require("./routes/todos");
const usersRoutes = require("./routes/users");
const mongoose = require("mongoose");
// const cors = require("cors");
//middle ware

mongoose.connect("mongodb://localhost:127.0.0.1:27017/?/ITPMearn", () => {
  console.log("connect to mongodb");
});
//middle ware
// app.use(express.json());
// app.use((req,res,next)=>{
//     console.log(req.body);
//     next()
// })
app.use(express.json());
// app.use(cors());
app.use("/todo", todosRoutes);
app.use("/user", usersRoutes);

app.get("/todo", (req, res, next) => {
  //endpoint // rout get todo
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" })
  );

 
  res.json(data);
});

app.get("/user");

//get todo by id/////////////////////////////////////////////////////////////////////////////////////////////////


// delete todo by id

app.delete("/todo/:id", (req, res) => {
  let { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
  let newArr = data.filter((obj) => {
    return obj.ID != id;
  });
  fs.writeFileSync("./data.json", JSON.stringify(newArr));
  res.json(newArr);
});







app.listen(5555, () => {
  console.log("my port is 3333");
});




//day3////////////////////////////////////////////////////////////////day3//////////////////////////////////////////////day3//////////////
app.use(express.static("./static")); // static files
/*************************************************** object data modling */