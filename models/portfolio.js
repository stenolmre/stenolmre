import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const PortfolioSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  url: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
})

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema)

export default Portfolio
