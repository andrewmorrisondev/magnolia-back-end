import { Router } from 'express'
import * as recipesCtrl from '../controllers/recipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, recipesCtrl.index)
router.get('/:recipeId', checkAuth, recipesCtrl.show)
router.post('/', checkAuth, recipesCtrl.create)
router.put('/:recipeId', checkAuth, recipesCtrl.update)
router.delete('/:recipeId', checkAuth, recipesCtrl.delete)

export { router }