import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../config/generateToken.js';

 export const registerUser = asyncHandler(async (req,res) => {
   console.log(req.body,"signup");
    const {name,email,password,pic} = req.body
if(!name|| !email || !password) {
    res.status(400)
     throw new Error("Please enter all the fields ")
}

 const existUser = await User.findOne({email})
 if(existUser) {
    res.status(400)
    throw new Error("user already exists")
 }

 const user = await User.create({name:name,email:email,password:password,pic:pic})
 if(user) {
    res.status(201).json({_id:user._id,name:user.name,email:user.email,pic:user.pic,token:generateToken(user._id)})
 }else {
    res.status(400)
    throw new Error("User not found")
 }
}
 )


 export const loginUser = asyncHandler(async (req, res) => {

     console.log(req.body,"login");
    const {email,password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("Please enter all fields")
    }

    const user = await User.findOne({email})
  
    if(user && (await user.matchPassword(password))){
        res.status(201).json({_id:user._id,name:user.name,email:user.email,pic:user.pic,token:generateToken(user._id)})
    }else {
        res.status(400)
        throw Error("Invalid Email or Password")
    }
 })

 export const searchUser = asyncHandler(async (req, res) => {
    console.log("search");
     const keywords = req.query.search ? {$or:[{name:{$regex:req.query.search, $options:"i"}},{email:{$regex:req.query.search,$options:"i"}}]}: {}

     const users = await User.find(keywords).find({_id:{$ne:req.user._id}})

     res.json(users)
 })

