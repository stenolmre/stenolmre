import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const ContactSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

export default Contact
