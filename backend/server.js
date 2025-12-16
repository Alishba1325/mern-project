// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const authRoutes = require('./routes/auth');
// const productRoutes = require('./routes/products');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ Default route for testing
// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// // API routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// const dashboardRoute = require('./routes/dashboard');

// // After other routes
// app.use('/api/dashboard', dashboardRoute);


// // const PORT = process.env.PORT || 8080;
// // const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/ai_surveillance';
// // server.js (Corrected Section)
// // ... (omitted code)

// // ✅ Fix 1: Change default port back to 5000 for consistency if .env fails
// const PORT = process.env.PORT || 5000; 
// const MONGO = process.env.MONGO_URI; 

// mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log('Server running on', PORT));
//   })
//   .catch(err => console.error(err));



// mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const dashboardRoute = require('./routes/dashboard');

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('API is running');
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/dashboard', dashboardRoute);

// Config
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI;

mongoose.connect(MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
})
.catch(err => console.error(err));
