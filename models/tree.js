import mongoose from 'mongoose'

const Schema = mongoose.Schema

const familyTreeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: {
      type: String,
      required: true,
    },
    creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
    familyRecipes: { type: Schema.Types.ObjectId, ref: 'FamilyRecipe' }
  },
  { timestamps: true }
)

const FamilyTree = mongoose.model('FamilyTree', familyTreeSchema)

export { FamilyTree }