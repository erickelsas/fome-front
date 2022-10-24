import React from 'react'
import './InputText.css'

const Form = ({ name, value, setAttr, condition, children}) => {
  return (
    <div className='d-flex flex-column justify-content-start'>
        <label htmlFor={name}>{children}</label>
        <input type="text" 
                name={name}
                className={condition(value) ? 'form-component valid' : 'form-component invalid'}
                value={value} 
                onChange={(e) => setAttr(e.target.value)}/>
    </div>
  )
}

export default Form