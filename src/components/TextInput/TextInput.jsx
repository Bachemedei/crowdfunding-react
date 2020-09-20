import React from 'react'
import "./TextInput.css"

function TextInput({ label, type }) {
    return (
        <form>
            <label className="form-item">
                {label}:
                <input className="form-input" type={type} name={label}/>
            </label>
        </form>
    )
}

export default TextInput
