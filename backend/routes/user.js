const express =require("express");
const router = express.Router();
const {check,validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User =require("../models/User");
const isAuth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");


//@  POST /api/users/register
//@desc  register user
//@acces Public

router.post("/register",

async(req,res)=>{
const {name,email,password} = req.body;

try{
// check if user exists
let user = await User.findOne({email})
if(user) {
    return res.status(400).json({msg:"Wrong Credentials"});
}
// create new user
const newUser = new User({name,email,password})
// encrypt password
const saltRounds = 10;
newUser.password = await bcrypt.hash(password,saltRounds)
 await newUser.save();
res.send({
    _id:newUser._id,
    name:newUser.name,
    email:newUser.email,
    role:newUser.role,
    token:createAccessToken(newUser)
})
}

catch(err){
return res.status(500).json({msg:err.message})
}
});

//@  POST /api/users/login
//@desc  login user
//@acces Public

router.post("/login",
[
  check("email", " Email is required").isEmail(),
  check("password", "Password is required").not().isEmpty(),
],
async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  try {
    const {email, password } = req.body;
    // Check if user does really exists
    const user = await User.findOne({ email });
    if (!user) {
       return res.staus(400).send({ msg: "Wrong credentials" });
    }
    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Wrong credentails" });
    }
   res.send({
       _id:user._id,
       name:user.name,
       email:user.email,
       role:user.role,
       token:createAccessToken(user)
   })
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
}
);


// @ GET api/users/all
//@desc get all users
//@access Private ADMIN
router.get("/",[isAuth,isAdmin],async(req,res)=>{
 const users = await User.find({})
 res.send(users)
});




//@ GET api/users/:id
//@desc get  user profile
//@access Private
router.get("/profile/:id",isAuth,async(req,res)=>{
const user = await User.findById(req.params.id)
if(user){
  res.send(user)
}
else{
  res.status(404).send("User Not Found")
}
});




//@route  DELETE api/users/:id
//@desc delete user
//@access Private Admin
router.delete("/:id",[isAuth,isAdmin],async(req,res)=>{
const user = await User.findById(req.params.id)
if(user){
await user.remove()
res.json({msg:"User successfully removed"})
}
else {
  res.status(404).send("User Not Found")
}

});









//@ PUT
//@desc update user profile
//@access Private
router.put("/profile",isAuth,async(req,res)=>{
  const user = await User.findById(req.user._id);
  if(user){
    user.name=req.body.name||user.name;
    user.email=req.body.email ||user.email;
    if(req.body.password){
      user.password = bcrypt.hashSync(req.body.password,10)
    }
   const newUser = await user.save()
    res.send({
      _id:newUser._id,
      name:newUser.name,
      email:newUser.email,
      role:newUser.role,
      token:createAccessToken(newUser),
    });
  }
});

// cerate Token 
const createAccessToken =(user)=>{
  return jwt.sign(
      {
       _id:user._id,
       name:user.name,
       email:user.email,
       role:user.role
      },
      process.env.ACCESS_TOKEN_SECRET || "mylittlesecret",
      {expiresIn:'20d'})
};

module.exports = router