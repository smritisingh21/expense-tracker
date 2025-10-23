const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file,cb) => {
        cb(null , './uploads')
    },
    filename : (req, file,cb) => {
        cb(null , `${Date.now()} - ${file.originalname}`)
    },
});

const filefilter = (req, file , cb)=>{
    const allowedTypes = ['image/png' , 'image/jpeg' , 'image/jpg'];

    if(allowedTypes.includes(file.mimeType)){
        cb(null , true);
    }else{
        cb(new Error('Only jpeg ,jpg , png formats are allowed'),false)
    }
}

const upload = multer({storage , filefilter})

module.exports = upload;