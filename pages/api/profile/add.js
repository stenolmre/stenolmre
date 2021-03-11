import connectDB from './../../../utils/connectDB'
import Profile from './../../../models/profile'

connectDB()

export default async function (req, res) {
  try {
    const profile = new Profile(req.body)

    await profile.save()

    res.send(profile)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
