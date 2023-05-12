import { Profile } from "../models/profile.js"
import { FamilyTree } from "../models/tree.js"
import { FamilyRecipe } from "../models/recipe.js"

async function create(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteTree(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export { 
  create,
  show,
  update,
  deleteTree as delete,
}