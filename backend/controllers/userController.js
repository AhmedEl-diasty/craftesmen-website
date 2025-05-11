const User = require("../models/User");

// Signup Controller
const signup = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ message: "Account created", user: newUser });
};

// Workers Controller
const getWorkers = async (req, res) => {
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
};

// Rating Controller
const rateWorker = async (req, res) => {
  const { stars } = req.body;
  const worker = await User.findById(req.params.id);
  worker.rating = (worker.rating * worker.ratingCount + stars) / (worker.ratingCount + 1);
  worker.ratingCount += 1;
  await worker.save();
  res.json({ message: "Rating updated", worker });
};

module.exports = {
  signup,
  getWorkers,
  rateWorker,
};
