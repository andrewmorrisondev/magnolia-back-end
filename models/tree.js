import mongoose from 'mongoose'

const Schema = mongoose.Schema

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
})

const familyTreeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [memberSchema],
    creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
    familyRecipes: [{ type: Schema.Types.ObjectId, ref: 'FamilyRecipe' }]
  },
  { timestamps: true }
)

const FamilyTree = mongoose.model('FamilyTree', familyTreeSchema)

export { FamilyTree }