import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  familyRecipes: { type: Schema.Types.ObjectId, ref: 'FamilyRecipe' },
  familyTree: { type: Schema.Types.ObjectId, ref: 'FamilyTree' }
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
