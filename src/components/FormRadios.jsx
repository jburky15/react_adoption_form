import React from 'react'

const FormRadios = () => {
  return (
    <>
        <div className="residenceRadioS">
            <input type="radio" value="Home" name="residence" /> Home
            <input type="radio" value="Apartment" name="residence" /> Apartment
        </div>
    </>
  )
}

export default FormRadios;