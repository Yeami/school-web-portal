const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('[INFO] MongoDB was connected successfully'))
  .catch((err) => console.log(`[INFO] MongoDB connection error: ${err.message}`));
