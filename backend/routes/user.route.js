import express from "express"
import { updateUser } from "../controllers/user.contoller.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.put("/update/:userId", verifyToken, updateUser)
router.put("/delete/:userId", verifyToken, deleteUser)

export default router
