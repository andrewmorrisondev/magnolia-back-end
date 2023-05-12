import { Router } from 'express'
import * as treesCtrl from '../controllers/trees.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, treesCtrl.create)


export { router }