import express from "express"
import { isLogin } from "../Controllers/login.controller.js"

const router = express.Router()

router.send('/login',isLogin)