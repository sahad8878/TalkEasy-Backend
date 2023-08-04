import express from "express";
const router = express.Router()
import {registerUser,loginUser,searchUser} from "../controllers/userController.js"
import { protect } from "../middlewares/authMiddlware.js";

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/searchUser",protect,searchUser)


export default router