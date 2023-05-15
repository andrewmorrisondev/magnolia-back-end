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
router.put('/:treeId/members/:memberId', checkAuth, treesCtrl.updateMember)
router.delete('/:treeId', checkAuth, treesCtrl.delete)
router.delete('/:treeId/members/:memberId', checkAuth, treesCtrl.deleteMember)


export { router }