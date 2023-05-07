const express = require("express");
const router = express.Router();
const userModel = require("../models/users");




router.get("/", async (req, res, next) => {
  try {
    let users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.json({ Message: err.message });
  }
});

// router.post("/", (req, res, next) => {
//   res.send("all user posted");
// });

router.post("/", async (req, res, next) => {
  var user = req.body;
  try {
    var savedUser = await user;
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(422).json({ massage: massage.err });
  }
});

module.exports = router;
