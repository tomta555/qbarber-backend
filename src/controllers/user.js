const { sendSuccessResponse } = require('../helper/api-response');
const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        .select('username')

        return sendSuccessResponse(res, users);
      } catch (error) {
        next(error);
      }
};