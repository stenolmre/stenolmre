import React, { useState } from 'react'
import Cookies from 'js-cookie'

import validateEnquiry from '@/utils/validateenquiry'

import { useEnquiryDispatch } from '@/context/enquiry'
import { sendEnquiry } from '@/actions/enquiry'

import Headline from '@/utils/headline'

const AskPrice = ({ page }) => {
  const user_lang = Cookies.get('lang') === 'ENG'

  const dispatchEnquiry = useEnquiryDispatch()

  const [isVisible] = useState(true)

  const [data, setData] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [processing, setProcessing] = useState(false)

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const send = async e => {
    e.preventDefault()
    setProcessing(true)

    if (validateEnquiry(data, setErrors, user_lang)) {
      await sendEnquiry(dispatchEnquiry, data, () => {
        setSuccess(true)
        setData({ name: '', email: '', phone: '', type: '', message: '' })
        setProcessing(false)

        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      }, () => setProcessing(false))
    } else {
      setProcessing(false)
    }
  }

  return <div className="askprice">
    <Headline firstLine language={user_lang} isVisible={isVisible} contactPage={page} subtitle={user_lang ? 'ask for price' : 'hinnapäring'} upperLineName={user_lang ? 'We have' : 'Me leiame'} headlineSpan={user_lang ? 'solutions' : 'lahendused'} lowerLineName={user_lang ? 'for your needs.' : 'Teie soovidele.'}/>
    <form>
      <label>{user_lang ? 'Name': 'Nimi'} <span style={{ color: 'red' }}>*</span></label>
      <input name="name" value={data.name} onChange={onChange}/>
      {errors["name"] && <p className="contact_error_msg">{errors["name"]}</p>}
      <label>Email <span style={{ color: 'red' }}>*</span></label>
      <input name="email" value={data.email} onChange={onChange}/>
      {errors["email"] && <p className="contact_error_msg">{errors["email"]}</p>}
      <label>{user_lang ? 'Phone': 'Telefon'} <span style={{ color: 'red' }}>*</span></label>
      <input name="phone" value={data.phone} onChange={onChange}/>
      {errors["phone"] && <p className="contact_error_msg">{errors["phone"]}</p>}
      <label>{user_lang ? 'Choose website type': 'Vali veebilehe sobiv kategooria'} <span style={{ color: 'red' }}>*</span></label>
      <select name="type" value={data.type} onChange={onChange}>
        <option disabled={data.type !== ''}></option>
        {
          user_lang
            ? websiteTypes.map(el => <option key={el} value={el}>{el}</option>)
            : websiteTypesEst.map(el => <option key={el} value={el}>{el}</option>)
        }
      </select>
      {errors["type"] && <p className="contact_error_msg">{errors["type"]}</p>}
      <label>{user_lang ? 'Details about your needs and wishes regarding to the website.': 'Palun kirjeldage soove ja nõudmisi seoses veebilehega.'} <span style={{ color: 'red' }}>*</span></label>
      <textarea name="message" value={data.message} onChange={onChange}/>
      {errors["message"] && <p className="contact_error_msg">{errors["message"]}</p>}
      <button disabled={processing} onClick={send}>{user_lang ? processing ? 'Sending..' : 'Send' : processing ? 'Saadan..' : 'Saada'}</button>
      {success && <p style={{ color: 'var(--blue)' }}>{user_lang ? 'Your enquiry is successfully sent. We will get back to your very soon. Thank You!' : 'Teie hinnapäring on edukalt saadetud. Me võtame Teiega ühendust esimesel võimalusel. Aitäh!'}</p>}
    </form>
  </div>
}

const websiteTypes = ['eCommerce', 'Portfolio', 'Magazine', 'Brand Promotional', 'Blog', 'Something else']

const websiteTypesEst = ['ePood', 'Portfoolio', 'Ajakiri/Uudisteportaal', 'Brandi Promomiseks', 'Blogi', 'Midagi Muud']

export default AskPrice
