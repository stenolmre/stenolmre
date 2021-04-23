import React from 'react'

import Input from '@/components/contact/input'

const Form = ({ onSubmit, isLanguageEnglish, onChange, errors, contact, removeError, processing, success }) => {
  return <form onSubmit={onSubmit} autoComplete="off">
    <Input
      label={isLanguageEnglish ? 'Name' : 'Nimi'}
      name="name" value={contact.name}
      onChange={onChange}
      errors={errors}
      removeError={removeError}
    />
    <Input
      label="Email"
      name="email"
      value={contact.email}
      onChange={onChange}
      errors={errors}
      removeError={removeError}
    />
    <Input
      textarea
      label={isLanguageEnglish ? 'Message' : 'Sõnum'}
      name="message"
      value={contact.message}
      onChange={onChange}
      errors={errors}
      removeError={removeError}
    />
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
            ? 'Your message is successfully sent. Thank You!'
            : 'Teie sõnum on edukalt saadetud. Aitäh!'
        }
      </p>
    }
  </form>
}

export default Form
