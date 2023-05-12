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
    const recipe = await FamilyRecipe.findById(req.params.recipeId)
      .populate('creator')
    res.status(200).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const recipe = await FamilyRecipe.findByIdAndUpdate(
      req.params.recipeId,
      req.body,
      { new: true }
    ).populate('creator')
    res.status(200).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteRecipe(req, res) {
  try {
    const recipe = await FamilyRecipe.findByIdAndDelete(req.params.recipeId)
    const profile = await Profile.findById(req.user.profile)
    profile.familyRecipes.remove({ _id: req.params.recipeId })
    await profile.save()
    res.status(200).json(recipe)
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