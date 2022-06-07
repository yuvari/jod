const router =require("express").Router();
const userCtrl =require('../controllers/userCtrl');
const auth = require("../middleware/auth");

router.post('/register',userCtrl.register)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)
router.get('/refresh_token',userCtrl.refreshToken)
router.get('/infor',auth,userCtrl.getUser)
router.get('/getotp',auth,userCtrl.getOTP)
router.patch('/personal',auth,userCtrl.About)
router.patch('/compdetail',auth,userCtrl.complete)
router.patch('/addcart',auth,userCtrl.addSaved)


// router.get("/usertest",(req,res)=>{
//     res.send("user test is successfull");
// });
// router.post("/userposttest",(req,res)=>{
//     const username =req.body.username;
//    res.send("your username is:"+username);
// })
module.exports= router