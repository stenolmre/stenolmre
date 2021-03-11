import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const ProfileSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  name: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  personal_info: {
    date_of_birth: String,
    email: String,
    phone: String
  },
  education: {
    high_school: Array,
    university: Array
  },
  story: {
    type: String,
    required: true
  },
  personality: {
    strengths: Array,
    hobbies: Array
  },
  jobs: {
    sport: Array,
    companies: Array
  }
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)

export default Profile
