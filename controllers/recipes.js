import { Profile } from "../models/profile.js"
import { FamilyRecipe } from "../models/recipe.js"
import { FamilyTree } from "../models/tree.js"

async function create(req, res) {
  try {
    req.body.creator = req.user.profile
    const recipe = await FamilyRecipe.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { familyRecipes: recipe } },
      { new: true }
    )
    recipe.creator = profile
    res.status(201).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function index(req, res) {
  try {
    const recipes = await FamilyRecipe.find({})
      .populate('creator')
      .sort({ createdAt: 'desc' })
    res.status(200).json(recipes)
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