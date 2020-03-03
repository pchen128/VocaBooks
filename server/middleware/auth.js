const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
    
    const token = req.cookies.token || '';
    console.log(req);
    try {
        if (!token) {
            return res.status(401).json('You need to Login')
        }
        console.log("yolo");
        const data = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ _id: data._id, 'tokens.token': token });
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (err) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}
module.exports = auth