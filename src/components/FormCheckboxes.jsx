import React from 'react'

const FormCheckboxes = (props) => {
  return (
    <div>
        <div className="formCheckboxes">
            <label>
                {props.label}
                <input type="checkbox" />
            </label>
        </div>
    </div>
  )
}

export default FormCheckboxes;