const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://alinagaysyuk:123@cluster0.7kb9q.mongodb.net/DB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  hobbies: { type: [String], required: true },
});

const Users = mongoose.model("users", userSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await Users.find({});

    console.log("Fetched users:", users);

    if (users.length === 0) {
      console.log("No users found in the database.");
    }

    res.json(users);
  } catch (err) {
    console.log("Error occurred:", err);
    res.status(500).json({ message: err.message });
  }
});

app.get("/add-test-user", async (req, res) => {
  try {
    const testUser = new Users({
      name: "Jane Doe",
      email: "jane@abc.com",
      age: 26,
      hobbies: ["databases", "painting", "soccer"],
    });

    await testUser.save();
    console.log("Test user added successfully");
    res.send("Test user added successfully");
  } catch (err) {
    console.log("Error adding test user:", err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
