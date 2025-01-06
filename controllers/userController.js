const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { name, email, age, hobbies } = req.body;
    const user = new User({ name, email, age, hobbies });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createUser, getUsers };
