const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const upload = require('../middlewares/uploadMiddleware')
const { registerUser, loginUser,  getUserInfo, } = require("../controllers/authController");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect ,getUserInfo);

router.post('/upload-image' , upload.single("image") ,(req, res)=>{

  try{
      if(!req.file){
        return res.status(404).json({message:"upload failed"})
    }
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
    res.status(200).json({imageUrl});
    }catch(err){
        return res.status(400).json({message : err.message})
    }
})

module.exports = router;




