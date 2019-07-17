
const jwt = require('jsonwebtoken');
const secret = 'ss0419';

exports.createToken = async (memberId) => { // Create Token

    const payload = {
      memberId
    };
    const option = { expiresIn: '60 days', issuer: 'm2sys.com', subject: 'token' };
  
    try {
      return await jwt.sign(payload, secret, option);
    } catch (error) {
      throw error;
    }
};

exports.verifyToken = async (token) => { // Verify Token
  try {
    return await jwt.verify(token, secret);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

