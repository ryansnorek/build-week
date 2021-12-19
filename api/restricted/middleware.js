const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ 
        message: "token required", 
        status: 401 
    });
  }
  jwt.verify(token, `${process.envJWT_SECRET}`, (err, decoded) => {
    if (err) {
      return next({ 
          message: "token invalid", 
          status: 401 
        });
    }
    req.decodedJwt = decoded;
    next();
  });
};