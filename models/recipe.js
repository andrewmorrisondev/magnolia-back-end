import mongoose from 'mongoose'

const Schema = mongoose.Schema

const familyRecipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: [{
      type: String,
      required: true,
    }],
    directions: {
      type: String,
      required: true,
    },
    creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
    familyTree: { type: Schema.Types.ObjectId, ref: 'FamilyTree' }
  },
  { timestamps: true }
)

const FamilyRecipe = mongoose.model('FamilyRecipe', familyRecipeSchema)

export { FamilyRecipe }