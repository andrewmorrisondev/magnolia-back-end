import { Router } from 'express'
import * as treesCtrl from '../controllers/trees.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/:treeId', checkAuth, treesCtrl.show)
router.post('/', checkAuth, treesCtrl.create)
router.post('/:treeId/members', checkAuth, treesCtrl.createMember)
router.put('/:treeId', checkAuth, treesCtrl.update)
router.delete('/:treeId', checkAuth, treesCtrl.delete)


export { router }