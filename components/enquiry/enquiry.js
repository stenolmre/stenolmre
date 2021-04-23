import React, { useState } from 'react'

import validateEnquiry from '@/validations/enquiry'

import { useEnquiryDispatch } from '@/context/enquiry'
import { sendEnquiry } from '@/actions/enquiry'

import Headline from '@/components/utils/headline'
import Form from '@/components/enquiry/form'

const Enquiry = ({ page, isLanguageEnglish }) => {
  const dispatchEnquiry = useEnquiryDispatch()

  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [processing, setProcessing] = useState(false)

  const onChange = e => setEnquiry({ ...enquiry, [e.target.name]: e.target.value })

  const removeError = name => {
    const { [name]: value, ...rest } = errors
    setErrors(rest)
  }

  const successfullySent = () => {
    setSuccess(true)
    setEnquiry({ name: '', email: '', phone: '', type: '', message: '' })
    setProcessing(false)

    setTimeout(() => { setSuccess(false) }, 5000)
  }

  const send = async e => {
    e.preventDefault()
    setProcessing(true)

    if (validateEnquiry(enquiry, setErrors, isLanguageEnglish)) {
      await sendEnquiry(dispatchEnquiry, enquiry, () => successfullySent(), () => setProcessing(false))
    } else {
      setProcessing(false)
    }
  }

  return <div className="askprice">
    <Headline
      firstLine
      isVisible={true}
      page={page}
      subtitle={isLanguageEnglish ? 'ask for price' : 'hinnapäring'}
      upperLineName={isLanguageEnglish ? 'We have' : 'Me leiame'}
      headlineSpan={isLanguageEnglish ? 'solutions' : 'lahendused'}
      lowerLineName={isLanguageEnglish ? 'for your needs.' : 'Teie soovidele.'}
    />
    <Form
      isLanguageEnglish={isLanguageEnglish}
      enquiry={enquiry}
      onChange={onChange}
      errors={errors}
      removeError={removeError}
      processing={processing}
      success={success}
      send={send}
    />
  </div>
}

export default Enquiry
