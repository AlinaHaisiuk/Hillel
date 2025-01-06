const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});

router.get("/users/stats", async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          averageAge: { $avg: "$age" },
          uniqueHobbies: { $addToSet: "$hobbies" },
        },
      },
      {
        $project: {
          _id: 0,
          totalUsers: 1,
          averageAge: 1,
          uniqueHobbiesCount: { $size: "$uniqueHobbies" },
        },
      },
    ]);

    if (!stats.length) {
      return res.status(404).json({ message: "No data found for statistics" });
    }

    res.status(200).json(stats[0]);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching statistics", error: err.message });
  }
});

module.exports = router;
