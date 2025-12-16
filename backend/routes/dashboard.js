const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // not authMiddleware
 // Tumhara JWT middleware

// Protected route
router.get('/', authMiddleware, (req, res) => {
  // req.user me token se decoded user info milegi
  res.json({
    message: 'Welcome to your dashboard!',
    user: req.user // id field is included from token
  });
});

module.exports = router;
