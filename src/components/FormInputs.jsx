import React from 'react'
import './FormInput.css'

const FormInputs = (props) => {
  const { label, onChange, id, ...inputProps } = props
  return (
    <>
      <div className="formLabels"><label>{ label }</label></div>
      <div className='formInputs'>
        <input {...inputProps} onChange={onChange} />
      </div>
    </>
  )
}

export  default FormInputs;