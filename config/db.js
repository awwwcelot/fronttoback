const mongoose = require('mongoose'),
     config = require('config'),
     db = config.get('mongoURI');

const connectDB = async () => {
     try {
          await mongoose.connect(db, {
               useUnifiedTopology: true,
               useNewUrlParser: true,
               useCreateIndex: true
          });

          console.log('MongoDB Connected...');
     } catch (err) {
          console.log('encountered error', err.message);

          // Exit process with failure
          process.exit(1);
     }
};

module.exports = connectDB;
