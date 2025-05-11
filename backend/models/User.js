const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ['user', 'worker'], required: true },  // تحديد ما إذا كان المستخدم عادي أو عامل
  profession: { type: String, required: function() { return this.role === 'worker'; } },  // خاص بالعاملين فقط
  location: { type: String, required: true },  // الموقع (المحافظة أو المدينة)
  rating: { type: Number, default: 0 },  // التقييم (من 1 إلى 5)
  ratingCount: { type: Number, default: 0 },  // عدد التقييمات
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
