
const User = require("../models/User");
const jwt = require("jsonwebtoken");


 //generate JWT token
 const generateToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: "12h",});
 }

 //register user 
 exports.registerUser = async (req, res) => {

    const { name, email, password } = req.body;

    //validation : check all fields are filled
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    
    try{
        //check if email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // if not ,create new user
        const user = await User.create({ name, email, password });
            res.status(201).json({
                user,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        
    }catch (error) {
        res.status(500).json({ message: "Server error"  });
    }
    };
 //login user 
 exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    //validation : check all fields are filled
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
        //check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        //check if password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        //if all good , send response
        res.status(200).json({
            user,
            _id: user._id,
            name: user.name,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
 };
 //get user 
 exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); //exclude password
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }

    
 };


 exports.logout= async(req,res) =>{
    try{
       console.log("logged out")
    }catch(error){
        
    }
 }