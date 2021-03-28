import React, { useState } from 'react'

import validateEmail from './../utils/validateemail'

import { useContactDispatch } from '@/context/contact'
import { sendMessage } from '@/actions/contact'

const Contact = () => {
  const dispatchContact = useContactDispatch()

  const [data, setData] = useState({ email: '', message: '' })
  const { email, message } = data
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [processing, setProcessing] = useState(false)

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const handleValidation = () => {
    let formErrors = {}
    let formIsValid = true

    if (!validateEmail(data["email"])){
      formIsValid = false
      formErrors["email"] = "Korrektne email on kohustuslik."
    }

    if (!data["message"]){
      formIsValid = false
      formErrors["message"] = "Sõnumi väli on kohustuslik."
    }

    setErrors(formErrors)
    return formIsValid
  }

  const onSubmit = async e => {
    e.preventDefault()
    setProcessing(true)

    if (handleValidation()) {
      await sendMessage(dispatchContact, data, () => {
        setSuccess(true)
        setData({ email: '', message: '' })
        setProcessing(false)

        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      }, () => setProcessing(false))
    } else {
      setProcessing(false)
    }
  }

  return <div className="contact" id="contact">
    <h2>Võta minuga ühendust</h2>
    <div>
      <a href="mailto:stenolmre@icloud.com" target="_blank" rel="noopener noreferrer">stenolmre@icloud.com</a>
    </div>
    <div>
      <a href="tel:37253461027" target="_blank" rel="noopener noreferrer">+372 5346 1027</a>
    </div>
    <p>või täida allolev vorm</p>
    <form onSubmit={onSubmit} autoComplete="off">
      <label>Email <span style={{ color: 'red' }}>*</span></label>
      <input name="email" value={data.email} onChange={onChange}/>
      {errors["name"] && <p className="contact_error_msg">{errors["name"]}</p>}
      <label>Sõnum <span style={{ color: 'red' }}>*</span></label>
      <textarea name="message" value={data.message} onChange={onChange}/>
      {errors["message"] && <p className="contact_error_msg">{errors["message"]}</p>}
      <button disabled={processing}>{processing ? 'Saadan..' : 'Saada'}</button>
      {success && <p style={{ color: 'green' }}>Teie sõnum on edukalt saadetud. Aitäh!</p>}
    </form>
    <footer>
      <p>Copyright @ 2020 by Sten Olmre. All rights reserved.</p>
      <div>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"/>
        </a>
        <a href="https://github.com/stenolmre" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"/>
        </a>
        <a href="https://instagram.com/stenolmre" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"/>
        </a>
      </div>
    </footer>
  </div>
}

export default Contact
