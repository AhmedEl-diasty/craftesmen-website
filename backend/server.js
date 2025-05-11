const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/craftsmen_platform", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  role: String, // 'user' or 'worker'
  profession: String,
  location: String,
  rating: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
});

const User = mongoose.model("User", UserSchema);

// SignUp Route (for creating new users and workers)
app.post("/signup", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ message: "Account created", user: newUser });
});

// Fetch workers based on filters (profession, budget, location)
app.get("/workers", async (req, res) => {
  const { profession, location, budget } = req.query;
  let min = 0, max = 5;
  if (budget === "low") max = 1.5;
  else if (budget === "medium") { min = 1.5; max = 2.5; }
  else if (budget === "high") min = 2.5;

  const workers = await User.find({
    role: "worker",
    profession,
    location,
    rating: { $gte: min, $lte: max },
  });

  res.json(workers);
});

// Rate a worker by its ID
app.post("/rate/:id", async (req, res) => {
  const { stars } = req.body;
  const worker = await User.findById(req.params.id);
  worker.rating = (worker.rating * worker.ratingCount + stars) / (worker.ratingCount + 1);
  worker.ratingCount += 1;
  await worker.save();
  res.json({ message: "Rating updated", worker });
});

// Start the server
app.listen(5000, () => console.log("✅ Server running on port 5000"));
