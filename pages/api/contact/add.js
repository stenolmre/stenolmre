import connectDB from './../../../utils/connectDB'
import Contact from './../../../models/contact'

connectDB()

export default async function (req, res) {
  const { email, message } = req.body

  if (!email || !message) return res.status(401).json({ msg: 'Kõik väljad on kohustuslikud.' })

  try {
    const contact = new Contact(req.body)

    await contact.save()

    res.send(contact)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
