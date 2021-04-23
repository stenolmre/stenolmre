import React, { Fragment } from 'react'

const Input = ({ textarea, label, name, value, onChange, errors, removeError }) => <Fragment>
  <label>{label} <span style={{ color: 'red' }}>*</span></label>
  {
    textarea
      ? <textarea name={name} value={value} onChange={onChange} onClick={() => removeError(name)}/>
      : <input name={name} value={value} onChange={onChange} onClick={() => removeError(name)}/>
  }
  {
    errors[name] && <p className="contact_error_msg">{errors[name]}</p>
  }
</Fragment>

export default Input
