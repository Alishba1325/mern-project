
// const jwt = require('jsonwebtoken');
// // const JWT_SECRET = process.env.JWT_SECRET || 'secret';
// const JWT_SECRET = process.env.JWT_SECRET;

// module.exports = function(req, res, next) {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) return res.status(401).json({ message: 'No token' });

//   const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded; // attach user info
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ message: 'Token invalid' });
//   }
// };

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

