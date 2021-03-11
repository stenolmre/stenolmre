import connectDB from './../../../utils/connectDB'
import Portfolio from './../../../models/portfolio'

connectDB()

export default async function (req, res) {
  const { url, image, name, excerpt, tech, images } = req.body

  if (!url || !image || !name || !excerpt || !tech || !images) return res.status(401).json({ msg: 'Kõik väljad on kohustuslikud.' })

  try {
    const portfolio = new Portfolio(req.body)

    await portfolio.save()

    const all_portfolios = await Portfolio.find()

    res.send(all_portfolios)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
