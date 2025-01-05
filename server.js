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
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  hobbies: { type: [String], required: true },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "name email age");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/insertOne", async (req, res) => {
  try {
    const { collectionName, document } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(document);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/insertMany", async (req, res) => {
  try {
    const { collectionName, documents } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.insertMany(documents);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.patch("/updateOne", async (req, res) => {
  try {
    const { collectionName, filter, update } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(filter, { $set: update });
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.patch("/updateMany", async (req, res) => {
  try {
    const { collectionName, filter, update } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.updateMany(filter, { $set: update });
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put("/replaceOne", async (req, res) => {
  try {
    const { collectionName, filter, replacement } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.replaceOne(filter, replacement);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete("/deleteOne", async (req, res) => {
  try {
    const { collectionName, filter } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne(filter);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete("/deleteMany", async (req, res) => {
  try {
    const { collectionName, filter } = req.body;
    const collection = db.collection(collectionName);
    const result = await collection.deleteMany(filter);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/find", async (req, res) => {
  try {
    const { collectionName, query, projection } = req.query;
    const collection = db.collection(collectionName);
    const cursor = collection.find(JSON.parse(query || "{}"), {
      projection: JSON.parse(projection || "{}"),
    });
    const results = await cursor.toArray();
    res.json({ success: true, results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
