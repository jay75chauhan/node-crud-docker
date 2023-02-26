const User = require("../models/user");

//CRUD controllers

// get all user

exports.getUser = (req, res, nex) => {
  User.find()
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => console.error(err));
};
