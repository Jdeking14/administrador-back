const User = require("@models/userModel");
const jwt = require('jsonwebtoken');

const tokenExpiration = '1h';

const registerUser = async({firstName, lastName, phoneNumber, email, password }) => {
    try {
        const newUser = new User({firstName, lastName, phoneNumber, email, password});
        return await newUser.save();
    }catch(err){
        throw err;
    }
}
const createToken = (user) =>{
    const payload = {user_id: user.id, username: user.username, email: user.email, role: "admin", ind_baja: user.ind_baja};
    const options = {expiresIn: tokenExpiration};

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, options);
}

module.exports = { registerUser, createToken };