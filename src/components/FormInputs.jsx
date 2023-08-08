import React from 'react'
import './FormInput.css'

const FormInputs = (props) => {
  const { label, onChange, id, ...inputProps } = props
  return (
    <>
        <div className='formInputs'>
            <input {...inputProps} onChange={onChange} />
        </div>
    </>
  )
}

export  default FormInputs;