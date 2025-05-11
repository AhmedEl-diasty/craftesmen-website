const express = require("express");
const router = express.Router();
const workerController = require("../controllers/workerController");

// Get all workers by profession and location
router.get("/", workerController.getAllWorkers);

// Get a specific worker by ID
router.get("/:id", workerController.getWorkerById);

// Add a new worker
router.post("/", workerController.addWorker);

module.exports = router;
