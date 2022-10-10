import express  from "express";
import bodyParser from "body-parser";
const router = express.Router()
import { authUser, getUserProfile, registerUser, deleteUsers, updateUserProfile } from '../controllers/userController.js'
import { protect } from "../middleware/authMiddleware.js";

// router.(bodyParser.urlencoded({ extended: false }))
// router.(bodyParser.json())



router.route('/').post(registerUser)
router.route('/:id').delete(deleteUsers)
router.post('/login', bodyParser.json(), authUser)
router.route('/profile').get( protect, getUserProfile).put( protect, updateUserProfile)




export default router