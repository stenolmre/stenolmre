import React, { Fragment, useState, useRef } from 'react'

import useElementInViewport from '@/hooks/useElementInViewport'

import validateContact from '@/validations/contact'

import { useContactDispatch } from '@/context/contact'
import { sendMessage } from '@/actions/contact'

import Headline from '@/components/utils/headline'
import Form from '@/components/contact/form'
import Footer from '@/components/layout/footer'

const Contact = ({ contactPage, isLanguageEnglish }) => {
  const dispatchContact = useContactDispatch()

  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [processing, setProcessing] = useState(false)

  const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

  const removeError = name => {
    const { [name]: value, ...rest } = errors
    setErrors(rest)
  }

  const successfullySent = () => {
    setSuccess(true)
    setContact({ name: '', email: '', message: '' })
    setProcessing(false)

    setTimeout(() => { setSuccess(false) }, 5000)
  }

  const onSubmit = async e => {
    e.preventDefault()
    setProcessing(true)

    if (validateContact(contact, setErrors, isLanguageEnglish)) {
      await sendMessage(dispatchContact, contact, () => successfullySent(), () => setProcessing(false))
    } else {
      setProcessing(false)
    }
  }

  const contactSection = useRef(null)
  const isVisible = useElementInViewport(contactSection)

  return <div className="contact" id="contact" ref={contactSection}>
    <Headline
      isVisible={isVisible}
      page={contactPage}
      firstLine
      subtitle={isLanguageEnglish ? 'contact' : 'kontakt'}
      upperLineName={isLanguageEnglish ? 'We would' : 'Kuuleksime'}
      headlineSpan={isLanguageEnglish ? 'love' : 'Teist'}
      lowerLineName={isLanguageEnglish ? 'hear from you.' : 'suurima rõõmuga.'}
    />
    <Form
      onSubmit={onSubmit}
      isLanguageEnglish={isLanguageEnglish}
      onChange={onChange}
      errors={errors}
      contact={contact}
      removeError={removeError}
      processing={processing}
      success={success}
    />
    <Footer />
  </div>
}

export default Contact
