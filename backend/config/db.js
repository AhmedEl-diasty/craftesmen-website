const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/craftsmen_platform", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to the database"))
  .catch(err => console.log("❌ Database connection error:", err));
