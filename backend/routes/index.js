const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const workerController = require("../controllers/workerController");

// User Routes
router.post("/signup", userController.signup);
router.get("/workers", userController.getWorkers);
router.post("/rate/:id", userController.rateWorker);

// Worker Routes
router.get("/worker", workerController.getAllWorkers);
router.get("/worker/:id", workerController.getWorkerById);
router.post("/worker", workerController.addWorker);

module.exports = router;
