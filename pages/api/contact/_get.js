import connectDB from './../../../utils/connectDB'
import Contact from './../../../models/contact'

connectDB()

export default async function (req, res) {
  try {
    const contacts = await Contact.find()

    if (!contacts) return res.status(404).json({ msg: 'Contacts not found.' })

    res.send(contacts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
