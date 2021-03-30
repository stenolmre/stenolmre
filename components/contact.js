import React, { useState, useRef, useEffect } from 'react'
import Cookies from 'js-cookie'

import validateEmail from '@/utils/validateemail'
import validateForm from '@/utils/validateform'

import { useContactDispatch } from '@/context/contact'
import { sendMessage } from '@/actions/contact'

import Headline from '@/utils/headline'
import Footer from '@/components/footer'

const Contact = ({ contactPage }) => {
  const user_lang = Cookies.get('lang') === 'ENG'

  const dispatchContact = useContactDispatch()

  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [processing, setProcessing] = useState(false)

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setProcessing(true)

    if (validateForm(data, setErrors, user_lang)) {
      await sendMessage(dispatchContact, data, () => {
        setSuccess(true)
        setData({ name: '', email: '', message: '' })
        setProcessing(false)

        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      }, () => setProcessing(false))
    } else {
      setProcessing(false)
    }
  }

  const contactSection = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isElementOutViewport = () => {
      const rect = contactSection.current && contactSection.current.getBoundingClientRect()

      if (!isVisible && rect && rect.top < window.innerHeight) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', isElementOutViewport)
    return () => window.removeEventListener('scroll', isElementOutViewport, true)
  }, [contactSection.current, isVisible])

  return <div className="contact" id="contact" ref={contactSection}>
    <Headline language={user_lang} isVisible={isVisible} contactPage={contactPage} firstLine subtitle={user_lang ? 'contact' : 'kontakt'} upperLineName={user_lang ? 'We would' : 'Kuuleksime'} headlineSpan={user_lang ? 'love' : 'Teist'} lowerLineName={user_lang ? 'hear from you.' : 'suurima rõõmuga.'}/>
    <form onSubmit={onSubmit} autoComplete="off">
      <label>{user_lang ? 'Name': 'Nimi'} <span style={{ color: 'red' }}>*</span></label>
      <input name="name" value={data.name} onChange={onChange}/>
      {errors["name"] && <p className="contact_error_msg">{errors["name"]}</p>}
      <label>Email <span style={{ color: 'red' }}>*</span></label>
      <input name="email" value={data.email} onChange={onChange}/>
      {errors["email"] && <p className="contact_error_msg">{errors["email"]}</p>}
      <label>{user_lang ? 'Message' : 'Sõnum'} <span style={{ color: 'red' }}>*</span></label>
      <textarea name="message" value={data.message} onChange={onChange}/>
      {errors["message"] && <p className="contact_error_msg">{errors["message"]}</p>}
      <button disabled={processing}>{user_lang ? processing ? 'Sending..' : 'Send' : processing ? 'Saadan..' : 'Saada'}</button>
      {success && <p style={{ color: 'var(--blue)' }}>{user_lang ? 'Your message is successfully sent. Thank You!' : 'Teie sõnum on edukalt saadetud. Aitäh!'}</p>}
    </form>
    <Footer />
  </div>
}

export default Contact
