const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

const handleJWT = (userType) => (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, JWT_KEY);

    if (!userType.includes(decoded.type)) {
      const error = new Error('Forbidden');
      error.code = 403;
      throw error;
    }

    req.userType = decoded.type;
    req.userId = decoded._id;

    next();
  } catch (error) {
    if (!error.code) {
      error.code = 401;
      error.message = 'Not authorized to access this resource';
    }

    next(error);
  }
};

module.exports = {
  handleJWTFanclub: handleJWT('user'),
  handleJWTStar: handleJWT('barber'),
};
