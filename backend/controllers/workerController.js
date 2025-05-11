const User = require("../models/User");

// Get worker details by ID
const getWorkerById = async (req, res) => {
  const worker = await User.findById(req.params.id);
  if (!worker) {
    return res.status(404).json({ message: "Worker not found" });
  }
  res.json(worker);
};

// Get all workers with a specific profession and location
const getAllWorkers = async (req, res) => {
  const { profession, location } = req.query;
  
  const workers = await User.find({
    role: "worker",
    profession,
    location
  });

  res.json(workers);
};

// Add new worker (this could be done at signup as well, just for illustration)
const addWorker = async (req, res) => {
  const { name, profession, location } = req.body;
  const newWorker = new User({ name, profession, location, role: "worker" });
  await newWorker.save();
  res.json({ message: "Worker added", worker: newWorker });
};

module.exports = {
  getWorkerById,
  getAllWorkers,
  addWorker
};
