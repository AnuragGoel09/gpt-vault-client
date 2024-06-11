import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
    
const router=Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

export default router