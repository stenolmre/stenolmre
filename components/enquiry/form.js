import React, { Fragment } from 'react'

import Input from '@/components/enquiry/input'
import Select from '@/components/enquiry/select'

const Form = ({ isLanguageEnglish, enquiry, onChange, errors, removeError, processing, success, send }) => {
  return <form onSubmit={send} autoComplete="off">
    <Input label={isLanguageEnglish ? 'Name' : 'Nimi'} name="name" value={enquiry.name} onChange={onChange} errors={errors} removeError={removeError}/>
    <Input label="Email" name="email" value={enquiry.email} onChange={onChange} errors={errors} removeError={removeError}/>
    <Input label={isLanguageEnglish ? 'Phone': 'Telefon'} name="phone" value={enquiry.phone} onChange={onChange} errors={errors} removeError={removeError}/>
    <Select isLanguageEnglish={isLanguageEnglish} label={isLanguageEnglish ? 'Choose website type': 'Vali veebilehe sobiv kategooria'} name="type" value={enquiry.type} onChange={onChange} disabled={enquiry.type !== ''} errors={errors} removeError={removeError}/>
    <Input textarea label={isLanguageEnglish ? 'Details about your needs and wishes regarding to the website.': 'Palun kirjeldage soove ja nõudmisi seoses veebilehega.'} name="message" value={enquiry.message} onChange={onChange} errors={errors} removeError={removeError}/>

    <button disabled={processing} style={success ? { background: 'var(--green)' } : null}>
      {
        processing
          ? isLanguageEnglish ? 'Sending...' : 'Saadan..'
          : success
            ? <i className="fas fa-check"/>
            : isLanguageEnglish ? 'Send' : 'Saada'
      }
    </button>

    {
      success && <p style={{ color: 'var(--green)' }}>
        {
          isLanguageEnglish
            ? 'Your enquiry is successfully sent. We will get back to your very soon. Thank You!'
            : 'Teie hinnapäring on edukalt saadetud. Me võtame Teiega ühendust esimesel võimalusel. Aitäh!'
        }
      </p>
    }
  </form>
}

export default Form
