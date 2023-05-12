import { Profile } from "../models/profile.js"
import { FamilyRecipe } from "../models/recipe.js"
import { FamilyTree } from "../models/tree.js"

async function create(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function index(req, res) {
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

async function deleteRecipe(req, res) {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export { 
  create,
  index,
  show,
  update,
  deleteRecipe as delete,
}