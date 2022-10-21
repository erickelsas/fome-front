import React from 'react'
import './Form.css'

const Form = ({ name, value, setAttr, children}) => {
  return (
    <>
        <label htmlFor={name}>{children}</label>
        <input type="text" 
                name={name}
                className='form-component' 
                value={value} 
                onChange={(e) => setAttr(e.target.value)}/>
    </>
  )
}

export default Form