import express from 'express'
import { protect } from '../middlewares/authMiddlware.js'
import { allMessages, sendMessage } from '../controllers/messagesController.js'

const router = express.Router()


router.post("/",protect,sendMessage)
router.get("/:chatId",protect,allMessages)

export default router