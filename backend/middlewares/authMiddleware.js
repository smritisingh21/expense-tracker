const jwt = require("jsonwebtoken");
const User = require("../models/User");

//protect routes middleware
exports.protect = async (req, res, next) => {
    let token  = req.headers.authorization?.split(" ")[1]; //Bearer tokenstring
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password"); //fetch user details except password
        next();
    }catch (error) {    
        res.status(401).json({ message: "Not authorized, token failed" });
    }
}
    