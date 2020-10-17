const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { sendSuccessResponse } = require('../helper/api-response');
const User = require('../models/user');


// const { JWT_KEY } = process.env;
const JWT_KEY = "thisissecretkey"
exports.signup = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      password: hashedPassword,
    });

    return sendSuccessResponse(res, {
      token: generateUserToken(user._id, 'user'),
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // const barberExists = await barber.exists({ username });
    let isbarber = false;
    // if (barberExists) isbarber = true;

    const userModel = isbarber ? barber : User;
    const userType = isbarber ? 'barber' : 'user';
    const { token } = await loginUser(userModel, userType, username, password);

    sendSuccessResponse(res, { role: userType, token });
  } catch (error) {
    next(error);
  }
};

const generateUserToken = (userId, userType, expiresIn = '14d') => {
  const payload = {
    _id: userId,
    type: userType,
  };

  return jwt.sign(payload, JWT_KEY, { expiresIn });
};

const loginUser = async (userModel, userType, username, password) => {
  const user = await userModel.findOne({ username });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = generateUserToken(user._id, userType);
      return { user, token };
    }
  }

  const error = new Error('Invalid Credentials');
  error.code = 401;
  throw error;
};
