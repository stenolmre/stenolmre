import connectDB from '@/utils/connectDB'
import Enquiry from './../../../models/enquiry'

connectDB()

export default async function (req, res) {
  const { name, email, phone, type, message } = req.body

  if (!name || !email || !phone || !type || !message) return res.status(401).json({ msg: 'Kõik väljad on kohustuslikud.' })

  try {
    const enquiry = new Enquiry(req.body)

    await enquiry.save()

    res.send(enquiry)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
