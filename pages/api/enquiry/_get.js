import connectDB from './../../../utils/connectDB'
import Enquiry from './../../../models/enquiry'

connectDB()

export default async function (req, res) {
  try {
    const enquiries = await Enquiry.find()

    if (!enquiries) return res.status(404).json({ msg: 'Enquiries not found.' })

    res.send(enquiries)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
