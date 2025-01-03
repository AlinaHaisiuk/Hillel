const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];
  res.render("users", { users });
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
  };
  res.render("userDetails", { user });
});

module.exports = router;
