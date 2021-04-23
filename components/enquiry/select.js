import React, { Fragment } from 'react'

import { websiteTypes, websiteTypesEst } from '@/components/enquiry/types'

const Select = ({ isLanguageEnglish, label, name, value, onChange, disabled, errors, removeError }) => <Fragment>
  <label>{label} <span style={{ color: 'red' }}>*</span></label>
  <select name={name} value={value} onChange={onChange} onClick={() => removeError(name)}>
    <option disabled={disabled}></option>
    {
      isLanguageEnglish
        ? websiteTypes.map(el => <option key={el} value={el}>{el}</option>)
        : websiteTypesEst.map(el => <option key={el} value={el}>{el}</option>)
    }
  </select>
  {
    errors[name] && <p className="contact_error_msg">{errors[name]}</p>
  }
</Fragment>

export default Select
