import connectDB from './../../../utils/connectDB'
import Portfolio from './../../../models/portfolio'

connectDB()

export default async function (req, res) {
  try {
    const portfolio = await Portfolio.find()

    if (!portfolio) return res.status(404).json({ msg: 'Portfolio is empty.' })

    res.send(portfolio)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
