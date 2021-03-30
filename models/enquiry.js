import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const EnquirySchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema)

export default Enquiry
