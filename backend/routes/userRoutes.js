const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ message: "Account created", user: newUser });
});

// Fetch workers route
router.get("/workers", async (req, res) => {
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

// Rating route
router.post("/rate/:id", async (req, res) => {
  const { stars } = req.body;
  const worker = await User.findById(req.params.id);
  worker.rating = (worker.rating * worker.ratingCount + stars) / (worker.ratingCount + 1);
  worker.ratingCount += 1;
  await worker.save();
  res.json({ message: "Rating updated", worker });
});

module.exports = router;
