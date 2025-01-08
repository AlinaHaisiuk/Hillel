const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password, age, hobbies } = req.body;
    const newUser = new User({ name, email, password, age, hobbies });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};

module.exports = { getUsers, addUser };
