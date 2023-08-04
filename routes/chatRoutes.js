import express from 'express'
import { protect } from '../middlewares/authMiddlware.js'
import { acessChats, fechChats,createGroupChat,renameGroup ,addToGroup,removeFromGroup} from '../controllers/chatController.js'
const router = express.Router()

router.post("/",protect,acessChats)
router.get("/",protect,fechChats)
router.post("/group",protect,createGroupChat)
router.put("/renameGroup",protect,renameGroup)
router.put("/addToGroup",protect,addToGroup)
router.put("/removeFromGroup",protect,removeFromGroup)


export default router